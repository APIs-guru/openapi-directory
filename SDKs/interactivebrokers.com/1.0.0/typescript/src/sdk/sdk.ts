import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import FormData from "form-data";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";
import { Security } from "./models/shared";



type OptsFunc = (sdk: SDK) => void;

export const ServerList = [
	"https://www.interactivebrokers.com/tradingapi/v1",
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

export function WithSecurity(security: Security): OptsFunc {
  if (!(security instanceof utils.SpeakeasyBase)) {
    security = new Security(security);
  }
  return (sdk: SDK) => {
    sdk._security = security;
  };
}


export class SDK {

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _security?: Security;
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
      if (this._security) {
        this._securityClient = utils.CreateSecurityClient(
          this._defaultClient,
          this._security
        );
      } else {
        this._securityClient = this._defaultClient;
      }
    }
    
  }
  
  /**
   * deleteAccountsAccountOrdersCustomerOrderId - Cancel Order
   *
   * Cancels the order with the referenced Customer Order ID for the account passed in the URL.
  **/
  deleteAccountsAccountOrdersCustomerOrderId(
    req: operations.DeleteAccountsAccountOrdersCustomerOrderIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteAccountsAccountOrdersCustomerOrderIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteAccountsAccountOrdersCustomerOrderIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/accounts/{account}/orders/{CustomerOrderId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "delete",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.DeleteAccountsAccountOrdersCustomerOrderIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.deleteAccountsAccountOrdersCustomerOrderId200ApplicationJsonObjects = httpRes?.data;
            }
            break;
          case httpRes?.status == 202:
            break;
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 408:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getAccounts - Brokerage Accounts
   *
   * Allows the caller to request a list of accounts associated with the session.
  **/
  getAccounts(
    req: operations.GetAccountsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAccountsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAccountsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/accounts";
    
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
        const res: operations.GetAccountsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getAccounts200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 202:
            break;
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 408:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getAccountsAccountOrders - Open Orders
   *
   * Returns a list of orders for the account passed in the URL
  **/
  getAccountsAccountOrders(
    req: operations.GetAccountsAccountOrdersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAccountsAccountOrdersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAccountsAccountOrdersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/accounts/{account}/orders", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetAccountsAccountOrdersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.orderStates = httpRes?.data;
            }
            break;
          case httpRes?.status == 202:
            break;
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 408:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getAccountsAccountOrdersCustomerOrderId - Return specific order info
   *
   * Returns the order with the referenced Customer Order ID for the account passed in the URL.
  **/
  getAccountsAccountOrdersCustomerOrderId(
    req: operations.GetAccountsAccountOrdersCustomerOrderIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAccountsAccountOrdersCustomerOrderIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAccountsAccountOrdersCustomerOrderIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/accounts/{account}/orders/{CustomerOrderId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetAccountsAccountOrdersCustomerOrderIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.orderStates = httpRes?.data;
            }
            break;
          case httpRes?.status == 202:
            break;
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 408:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getAccountsAccountPositions - Account Positions
   *
   * Returns a list of positions for the indicated account. 
  **/
  getAccountsAccountPositions(
    req: operations.GetAccountsAccountPositionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAccountsAccountPositionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAccountsAccountPositionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/accounts/{account}/positions", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetAccountsAccountPositionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getAccountsAccountPositions200ApplicationJsonObjects = httpRes?.data;
            }
            break;
          case httpRes?.status == 202:
            break;
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 408:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getAccountsAccountSummary - Account Values Summary
   *
   * Returns a list of account and margin balances associated with the account passed in the URL
  **/
  getAccountsAccountSummary(
    req: operations.GetAccountsAccountSummaryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAccountsAccountSummaryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAccountsAccountSummaryRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/accounts/{account}/summary", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetAccountsAccountSummaryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getAccountsAccountSummary200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 202:
            break;
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 408:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * getMarketdataExchangeComponents - Exchange Components
   *
   * This endpoint provides a bit mapping for the bid/ask/last 'market' values in the snapshot response. 
  **/
  getMarketdataExchangeComponents(
    config?: AxiosRequestConfig
  ): Promise<operations.GetMarketdataExchangeComponentsResponse> {
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/marketdata/exchange_components";
    
    const client: AxiosInstance = this._securityClient!;
    
    return client
      .request({
        url: url,
        method: "get",
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetMarketdataExchangeComponentsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.getMarketdataExchangeComponents200ApplicationJsonObjects = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 408:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postAccountsAccountOrderImpact - Return margin impact info
   *
   * This endpoint allows the consumer to check the impact that an order would have on the account, including margin, NLV and estimated commission costs.
   * To specify the contract, you provide a value for the ContractId field, OR Ticker/ListingExchange/InstrumentType=STK for stocks OR Ticker/Currency/InstrumentType=CASH for FX.
   * 
  **/
  postAccountsAccountOrderImpact(
    req: operations.PostAccountsAccountOrderImpactRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostAccountsAccountOrderImpactResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostAccountsAccountOrderImpactRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/accounts/{account}/order_impact", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.PostAccountsAccountOrderImpactResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postAccountsAccountOrderImpact200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 202:
            break;
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 408:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postAccountsAccountOrders - Place Order
   *
   * Places order
  **/
  postAccountsAccountOrders(
    req: operations.PostAccountsAccountOrdersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostAccountsAccountOrdersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostAccountsAccountOrdersRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/accounts/{account}/orders", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.PostAccountsAccountOrdersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.orderStates = httpRes?.data;
            }
            break;
          case httpRes?.status == 202:
            break;
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 408:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postOauthAccessToken - Obtain a access token
   *
   * Obtain an access token using the request token and the verification code you received after the user provided authorization. See section 6.3 of the OAuth v1.0a specification for more details. 
   * 
  **/
  postOauthAccessToken(
    req: operations.PostOauthAccessTokenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostOauthAccessTokenResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostOauthAccessTokenRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/oauth/access_token";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.PostOauthAccessTokenResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postOauthAccessToken200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 408:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postOauthLiveSessionToken - Obtain a live session token
   *
   * In order to access protected IB resources, a live session token is required. This endpoint allows consumers to obtain a live session token to access these resources using an OAuth access token and the Diffie-Hellman prime and generator supplied during the registration process.
   * Note this is an additional IB-specific step, and not part of the OAuth v1.0a specification. Please refer to the "OAuth at Interactive Brokers" document for more details.  https://www.interactivebrokers.com/webtradingapi/oauth.pdf
   * 
  **/
  postOauthLiveSessionToken(
    req: operations.PostOauthLiveSessionTokenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostOauthLiveSessionTokenResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostOauthLiveSessionTokenRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/oauth/live_session_token";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.PostOauthLiveSessionTokenResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postOauthLiveSessionToken200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 408:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * postOauthRequestToken - Obtain a request token
   *
   * Obtain a request token. See section 6.1 of the OAuth v1.0a specification for more information. http://oauth.net/core/1.0a/#auth_step1
   * 
   * Note we do not return an oauth_token_secret in the response as we are using RSA signatures rather than PLAINTEXT authentication. 
   * 
  **/
  postOauthRequestToken(
    req: operations.PostOauthRequestTokenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostOauthRequestTokenResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostOauthRequestTokenRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/oauth/request_token";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
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
        const res: operations.PostOauthRequestTokenResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.postOauthRequestToken200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 408:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  /**
   * putAccountsAccountOrdersCustomerOrderId - Modify Order
   *
   * Allows the caller to modify the order with the referenced Customer Order ID specified in the URL. A separate Customer Order ID must be provided in the request body for the modification.
  **/
  putAccountsAccountOrdersCustomerOrderId(
    req: operations.PutAccountsAccountOrdersCustomerOrderIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutAccountsAccountOrdersCustomerOrderIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutAccountsAccountOrdersCustomerOrderIdRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.GenerateURL(baseURL, "/accounts/{account}/orders/{CustomerOrderId}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    return client
      .request({
        url: url,
        method: "put",
        headers: headers,
        data: body, 
        ...config,
      }).then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PutAccountsAccountOrdersCustomerOrderIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.MatchContentType(contentType, `application/json`)) {
                res.putAccountsAccountOrdersCustomerOrderId200ApplicationJsonObjects = httpRes?.data;
            }
            break;
          case httpRes?.status == 202:
            break;
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 408:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
