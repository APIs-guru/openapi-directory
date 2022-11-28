import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Umprn {
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
   * lookupUmprn - lookupUMPRN
   *
   * UMPRNs are a unique numeric code for any Multiple Residence household on the optional Multiple Residence dataset.
   * 
   * ### Lookup a UMPRN
   * 
   * Returns an address identified via its UMPRN.
   * 
   * ### Testing
   * 
   * To test your implementation of our API we have a range of test UMPRNs that yield both successful and unsuccessful responses to your request. They are the following:
   * 
   * To test your implementation of our API we have a range of test UMPRNs that yield both successful and unsuccessful responses to your request. They are the following
   * 
   * - `0` Returns a successful UMPRN lookup response `2000`
   * - `-1` Returns "UMPRN not found", error `4044`
   * - `-2` Returns "no lookups remaining", error `4020`
   * - `-3` Returns "daily (or individual) lookup limit breached", error `4021`
   * 
   * Test requests will undergo usual authentication and restriction rules (individual and daily lookup limits) to surface any problems you may have during implementation. However, it will not count towards a postcode lookup on your key.
   * 
   * ### Pricing
   * 
   * Per lookup charges apply. Empty responses are not charged.
   * 
   * ### Data Source
   * 
   * Royal Mail (Postcode Address File), Ordnance Survey (Code-Point Open).
   * 
  **/
  lookupUmprn(
    req: operations.LookupUmprnRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LookupUmprnResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LookupUmprnRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/umprn/{umprn}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .request({
        url: url,
        method: "get",
        ...requestConfig,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.LookupUmprnResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.addressLookupResponseSchema = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponseSchema = httpRes?.data;
            }
            break;
          case httpRes?.status == 402:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponseSchema = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponseSchema = httpRes?.data;
            }
            break;
          case httpRes?.status == 500:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.errorResponseSchema = httpRes?.data;
            }
            break;
          case httpRes?.status == 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
