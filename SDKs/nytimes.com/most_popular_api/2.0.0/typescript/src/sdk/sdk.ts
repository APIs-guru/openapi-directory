import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";

type OptsFunc = (sdk: SDK) => void;

const Servers = [
  "http://api.nytimes.com/svc/mostpopular/v2",
  "https://api.nytimes.com/svc/mostpopular/v2",
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

// SDK Documentation: http://developer.nytimes.com/
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
  
  // GetMostemailedSectionTimePeriodJson - Most Emailed by Section & Time Period
  GetMostemailedSectionTimePeriodJson(
    req: operations.GetMostemailedSectionTimePeriodJsonRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMostemailedSectionTimePeriodJsonResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMostemailedSectionTimePeriodJsonRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mostemailed/{section}/{time-period}.json", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetMostemailedSectionTimePeriodJsonResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getMostemailedSectionTimePeriodJson200ApplicationJsonObject = httpRes?.data;
            }
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.getMostemailedSectionTimePeriodJson400ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 403:
            if (MatchContentType(contentType, `application/xml`)) {
                const resBody: string = JSON.stringify(httpRes?.data, null, 0);
                let out: Uint8Array = new Uint8Array(resBody.length);
                for (let i: number = 0; i < resBody.length; i++) out[i] = resBody.charCodeAt(i);
                res.body = out;
            }
            if (MatchContentType(contentType, `application/json`)) {
                res.getMostemailedSectionTimePeriodJson403ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMostsharedSectionTimePeriodJson - Most Shared by Section & Time Period
  GetMostsharedSectionTimePeriodJson(
    req: operations.GetMostsharedSectionTimePeriodJsonRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMostsharedSectionTimePeriodJsonResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMostsharedSectionTimePeriodJsonRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mostshared/{section}/{time-period}.json", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetMostsharedSectionTimePeriodJsonResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getMostsharedSectionTimePeriodJson200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 400:
            if (MatchContentType(contentType, `application/json`)) {
                res.getMostsharedSectionTimePeriodJson400ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMostviewedSectionTimePeriodJson - Most Viewed by Section & Time Period
  GetMostviewedSectionTimePeriodJson(
    req: operations.GetMostviewedSectionTimePeriodJsonRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMostviewedSectionTimePeriodJsonResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMostviewedSectionTimePeriodJsonRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/mostviewed/{section}/{time-period}.json", req.pathParams);
    
    const client: AxiosInstance = CreateSecurityClient(this.defaultClient!, req.security)!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetMostviewedSectionTimePeriodJsonResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getMostviewedSectionTimePeriodJson200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
