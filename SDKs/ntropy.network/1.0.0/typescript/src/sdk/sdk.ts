import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";

type OptsFunc = (sdk: SDK) => void;

const Servers = [
  "https://api.ntropy.network",
] as const;

export function WithServerURL(
  serverURL: string,
  params?: Map<string, string>
): OptsFunc {
  return (sdk: SDK) => {
    if (params != null) {
      serverURL = utils.ReplaceParameters(serverURL, params);
    }
    sdk.serverURL = serverURL;
  };
}

export function WithClient(client: AxiosInstance): OptsFunc {
  return (sdk: SDK) => {
    sdk.defaultClient = client;
  };
}


export class SDK {
  defaultClient?: AxiosInstance;
  securityClient?: AxiosInstance;
  security?: any;
  serverURL: string;

  constructor(...opts: OptsFunc[]) {
    opts.forEach((o) => o(this));
    if (this.serverURL == "") {
      this.serverURL = Servers[0];
    }

    if (!this.defaultClient) {
      this.defaultClient = axios.create({ baseURL: this.serverURL });
    }

    if (!this.securityClient) {
      if (this.security) {
        this.securityClient = CreateSecurityClient(
          this.defaultClient,
          this.security
        );
      } else {
        this.securityClient = this.defaultClient;
      }
    }
  }
  
  // GetABatchOfBusinessTransactionClassificationResults - Get a batch of business transaction classification results.
  /** 
   * Get a batch of business transaction classification results.
  **/
  GetABatchOfBusinessTransactionClassificationResults(
    req: operations.GetABatchOfBusinessTransactionClassificationResultsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetABatchOfBusinessTransactionClassificationResultsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetABatchOfBusinessTransactionClassificationResultsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/classifier/business/batch/{id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetABatchOfBusinessTransactionClassificationResultsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getABatchOfBusinessTransactionClassificationResults200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            break;
          case 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetABatchOfConsumerTransactionClassificationResults - Get a batch of consumer transaction classification results.
  /** 
   * Get a batch of consumer transaction classification results.
  **/
  GetABatchOfConsumerTransactionClassificationResults(
    req: operations.GetABatchOfConsumerTransactionClassificationResultsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetABatchOfConsumerTransactionClassificationResultsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetABatchOfConsumerTransactionClassificationResultsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/classifier/consumer/batch/{id}", req.pathParams);
    
    const client: AxiosInstance = this.defaultClient!;
    
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetABatchOfConsumerTransactionClassificationResultsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getABatchOfConsumerTransactionClassificationResults200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 404:
            break;
          case 500:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
