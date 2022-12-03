import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Quotes {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }
  
  /**
   * getQuotesQuoteId - /quotes/{quote_id}
   *
   * ### Get a quote
   * 
   * Get the latest details for a specific [quote](https://www.heraldapi.com/docs/quotes) created by a `submission`. While a submission can contain many products, each quote is for a *single* product. A `quote_id` is created for each quote, located in the submission response. 
   * 
   * > If you're looking to create a new quote with a carrier, you need to [create a submission](../reference/HeraldAPI.v1.yaml/paths/~1submissions/post) before retrieving quote details.
  **/
  getQuotesQuoteId(
    req: operations.GetQuotesQuoteIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetQuotesQuoteIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetQuotesQuoteIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/quotes/{quote_id}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetQuotesQuoteIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getQuotesQuoteId200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
