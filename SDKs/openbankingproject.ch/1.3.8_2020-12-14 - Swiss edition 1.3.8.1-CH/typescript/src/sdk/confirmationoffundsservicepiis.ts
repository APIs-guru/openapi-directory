import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class ConfirmationOfFundsServicePiis {
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
   * checkAvailabilityOfFunds - Confirmation of funds request
   *
   * Creates a confirmation of funds request at the ASPSP. Checks whether a specific amount is available at point of time of the request on an account linked to a given tuple card issuer(TPP)/card number, or addressed by IBAN and TPP respectively.
   * If the related extended services are used a conditional Consent-ID is contained in the header. This field is contained but commented out in this specification.
  **/
  checkAvailabilityOfFunds(
    req: operations.CheckAvailabilityOfFundsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.CheckAvailabilityOfFundsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CheckAvailabilityOfFundsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/funds-confirmations";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...utils.GetHeadersFromRequest(req.headers), ...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "post",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.CheckAvailabilityOfFundsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.checkAvailabilityOfFunds200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error400NgAis = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error400Ais = httpRes?.data;
            }
            break;
          case httpRes?.status == 401:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error401NgPiis = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error401Piis = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error403NgPiis = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error403Piis = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error404NgPiis = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error404Piis = httpRes?.data;
            }
            break;
          case httpRes?.status == 405:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error405NgPiis = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error405Piis = httpRes?.data;
            }
            break;
          case httpRes?.status == 406:
            break;
          case httpRes?.status == 408:
            break;
          case httpRes?.status == 409:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.error409NgPiis = httpRes?.data;
            }
            if (utils.MatchContentType(contentType, `application/problem+json`)) {
                res.error409Piis = httpRes?.data;
            }
            break;
          case httpRes?.status == 415:
            break;
          case httpRes?.status == 429:
            break;
          case httpRes?.status == 500:
            break;
          case httpRes?.status == 503:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
