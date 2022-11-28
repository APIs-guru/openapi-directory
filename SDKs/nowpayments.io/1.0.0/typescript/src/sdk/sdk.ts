import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";



type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"https://api.nowpayments.io",
] as const;

export function WithServerURL(
  serverURL: string,
  params?: Map<string, string>
): OptsFunc {
  return (sdk: SDK) => {
    if (params != null) {
      serverURL = utils.ReplaceParameters(serverURL, params);
    }
    sdk._serverURL = serverURL;
  };
}

export function WithClient(client: AxiosInstance): OptsFunc {
  return (sdk: SDK) => {
    sdk._defaultClient = client;
  };
}


export class SDK {

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.0.1";
  private _genVersion = "internal";

  constructor(...opts: OptsFunc[]) {
    opts.forEach((o) => o(this));
    if (this._serverURL == "") {
      this._serverURL = ServerList[0];
    }

    if (!this._defaultClient) {
      this._defaultClient = axios.create({ baseURL: this._serverURL });
    }

    if (!this._securityClient) {
      this._securityClient = this._defaultClient;
    }
    
  }
  
  /**
   * threeGetEstimatedPrice - 3. Get estimated price
   *
   * This is a method for calculating the approximate price in cryptocurrency for a given value in Fiat currency. You will need to provide the initial cost in the Fiat currency (amount, currency_from) and the necessary cryptocurrency (currency_to)
   * Currently following fiat currencies are available: usd, eur, nzd, brl, gbp.
  **/
  threeGetEstimatedPrice(
    req: operations.ThreeGetEstimatedPriceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.ThreeGetEstimatedPriceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.ThreeGetEstimatedPriceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/estimate";
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.ThreeGetEstimatedPriceResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.threeGetEstimatedPrice200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * sixGetTheMinimumPaymentAmount - 6. Get the minimum payment amount
   *
   * Get the minimum payment amount for a specific pair.
   * 
   * You can provide both currencies in the pair or just currency_from, and we will calculate the minimum payment amount for currency_from and currency which you have specified as the outcome in the Store Settings.
   * 
   * In the case of several outcome wallets we will calculate the minimum amount in the same way we route your payment to a specific wallet.
  **/
  sixGetTheMinimumPaymentAmount(
    req: operations.SixGetTheMinimumPaymentAmountRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SixGetTheMinimumPaymentAmountResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SixGetTheMinimumPaymentAmountRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/min-amount";
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.SixGetTheMinimumPaymentAmountResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.sixGetTheMinimumPaymentAmount200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * sevenGetListOfPayments - 7. Get list of payments
   *
   * Returns the entire list of all transactions, created with certain API key.
   * The list of optional parameters:
   * - limit - number of records in one page. (possible values: from 1 to 500)
   * - page - the page number you want to get (possible values: from 0 to **page count - 1**)
   * - sortBy - sort the received list by a paramenter. Set to **created_at** by default (possible values: payment_id, payment_status, pay_address, price_amount, price_currency, pay_amount, actually_paid, pay_currency, order_id, order_description, purchase_id, outcome_amount, outcome_currency)
   * - orderBy - display the list in ascending or descending order. Set to **asc** by default (possible values: asc, desc)
   * - dateFrom - select the displayed period start date (date format: YYYY-MM-DD or yy-MM-ddTHH:mm:ss.SSSZ).
   * - dateTo - select the displayed period end date (date format: YYYY-MM-DD or yy-MM-ddTHH:mm:ss.SSSZ).
  **/
  sevenGetListOfPayments(
    req: operations.SevenGetListOfPaymentsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.SevenGetListOfPaymentsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.SevenGetListOfPaymentsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/v1/payment/";
    
    const client: AxiosInstance = this._defaultClient!;
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
        const res: operations.SevenGetListOfPaymentsResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.GetHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.sevenGetListOfPayments200ApplicationJsonObject = httpRes?.data;
            }
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
