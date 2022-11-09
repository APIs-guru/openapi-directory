import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { ParamsSerializerOptions } from "axios";
import { GetQueryParamSerializer } from "../internal/utils/queryparams";
import { SerializeRequestBody } from "../internal/utils/requestbody";
import FormData from 'form-data';
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";
import { Security } from "./models/shared";

type OptsFunc = (sdk: SDK) => void;

const Servers = [
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
    sdk.serverURL = serverURL;
  };
}

export function WithClient(client: AxiosInstance): OptsFunc {
  return (sdk: SDK) => {
    sdk.defaultClient = client;
  };
}

export function WithSecurity(security: Security): OptsFunc {
  if (!(security instanceof utils.SpeakeasyBase)) {
    security = new Security(security);
  }
  return (sdk: SDK) => {
    sdk.security = security;
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
  
  // DeleteAccountsAccountOrdersCustomerOrderId - Cancel Order
  /** 
   * Cancels the order with the referenced Customer Order ID for the account passed in the URL.
  **/
  DeleteAccountsAccountOrdersCustomerOrderId(
    req: operations.DeleteAccountsAccountOrdersCustomerOrderIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteAccountsAccountOrdersCustomerOrderIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.DeleteAccountsAccountOrdersCustomerOrderIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/accounts/{account}/orders/{CustomerOrderId}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .delete(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.DeleteAccountsAccountOrdersCustomerOrderIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.deleteAccountsAccountOrdersCustomerOrderId200ApplicationJsonObjects = httpRes?.data;
            }
            break;
          case 202:
            break;
          case 204:
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 408:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetAccounts - Brokerage Accounts
  /** 
   * Allows the caller to request a list of accounts associated with the session.
  **/
  GetAccounts(
    req: operations.GetAccountsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAccountsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAccountsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/accounts";
    
    const client: AxiosInstance = this.securityClient!;
    let qpSerializer: ParamsSerializerOptions = GetQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    return client
      .get(url, {
        ...requestConfig,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetAccountsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getAccounts200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 202:
            break;
          case 204:
            break;
          case 401:
            break;
          case 403:
            break;
          case 408:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetAccountsAccountOrders - Open Orders
  /** 
   * Returns a list of orders for the account passed in the URL
  **/
  GetAccountsAccountOrders(
    req: operations.GetAccountsAccountOrdersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAccountsAccountOrdersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAccountsAccountOrdersRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/accounts/{account}/orders", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetAccountsAccountOrdersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.orderStates = httpRes?.data;
            }
            break;
          case 202:
            break;
          case 204:
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 408:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetAccountsAccountOrdersCustomerOrderId - Return specific order info
  /** 
   * Returns the order with the referenced Customer Order ID for the account passed in the URL.
  **/
  GetAccountsAccountOrdersCustomerOrderId(
    req: operations.GetAccountsAccountOrdersCustomerOrderIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAccountsAccountOrdersCustomerOrderIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAccountsAccountOrdersCustomerOrderIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/accounts/{account}/orders/{CustomerOrderId}", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetAccountsAccountOrdersCustomerOrderIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.orderStates = httpRes?.data;
            }
            break;
          case 202:
            break;
          case 204:
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 408:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetAccountsAccountPositions - Account Positions
  /** 
   * Returns a list of positions for the indicated account. 
  **/
  GetAccountsAccountPositions(
    req: operations.GetAccountsAccountPositionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAccountsAccountPositionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAccountsAccountPositionsRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/accounts/{account}/positions", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetAccountsAccountPositionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getAccountsAccountPositions200ApplicationJsonObjects = httpRes?.data;
            }
            break;
          case 202:
            break;
          case 204:
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 408:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetAccountsAccountSummary - Account Values Summary
  /** 
   * Returns a list of account and margin balances associated with the account passed in the URL
  **/
  GetAccountsAccountSummary(
    req: operations.GetAccountsAccountSummaryRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAccountsAccountSummaryResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAccountsAccountSummaryRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/accounts/{account}/summary", req.pathParams);
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetAccountsAccountSummaryResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getAccountsAccountSummary200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 202:
            break;
          case 204:
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 408:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetAccountsAccountTrades - Returns trades in account
  /** 
   * Returns a list of trades for the account starting at the given 'since' date to the current time (now()). Timezone is UTC. Any request with a future since date or going further than one week will result in an HTTP 400 bad request response. Calling /trades without since will return all trades for the past 24 hours.
   * 
  **/
  GetAccountsAccountTrades(
    req: operations.GetAccountsAccountTradesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetAccountsAccountTradesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetAccountsAccountTradesRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/accounts/{account}/trades", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    return client
      .get(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetAccountsAccountTradesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getAccountsAccountTrades200ApplicationJsonObjects = httpRes?.data;
            }
            break;
          case 202:
            break;
          case 204:
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 408:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMarketdataExchangeComponents - Exchange Components
  /** 
   * This endpoint provides a bit mapping for the bid/ask/last 'market' values in the snapshot response. 
  **/
  GetMarketdataExchangeComponents(
    
    config?: AxiosRequestConfig
  ): Promise<operations.GetMarketdataExchangeComponentsResponse> {
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/marketdata/exchange_components";
    
    const client: AxiosInstance = this.securityClient!;
    return client
      .get(url, {
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetMarketdataExchangeComponentsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getMarketdataExchangeComponents200ApplicationJsonObjects = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 408:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetMarketdataSnapshot - Market Data Snapshot
  /** 
   * This endpoint allows the consumer to request a market data snapshot for one or more trading products. 
   * Consumers need to provide unique identifiers (conids) for the products in the IB product database (retrievable using the /secdef endpoint). The 'market' values are integers whose bits indicate the exchange(s) making up the quote. 
   * 
   * The mapping of bit to exchange is obtained from the marketdata/exchange_component endpoint. For example, if a bid has a 'market' value of 5 and the exchange_component result has the map 
   * 0 => NYSE, 1 => ISLAND, 2 => ARCA then the exchanges contributing to the bid size are NYSE and ARCA. 
   * 
   * Similarly, if market=2, then only ISLAND is contributing.
   * 
  **/
  GetMarketdataSnapshot(
    req: operations.GetMarketdataSnapshotRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetMarketdataSnapshotResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetMarketdataSnapshotRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/marketdata/snapshot";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .get(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetMarketdataSnapshotResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getMarketdataSnapshot200ApplicationJsonObjects = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 408:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // GetSecdef - Get security definition
  /** 
   * Fields that compose security definition. Allowed combinations,
   * (1) type and symbol and currency, or
   * (2) type, symbol, exchange, and currency, or
   * (3) conid
   * 
  **/
  GetSecdef(
    req: operations.GetSecdefRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSecdefResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSecdefRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/secdef";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .get(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.GetSecdefResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.getSecdef200ApplicationJsonObjects = httpRes?.data;
            }
            break;
          case 202:
            break;
          case 204:
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 408:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostAccountsAccountOrderImpact - Return margin impact info
  /** 
   * This endpoint allows the consumer to check the impact that an order would have on the account, including margin, NLV and estimated commission costs.
   * To specify the contract, you provide a value for the ContractId field, OR Ticker/ListingExchange/InstrumentType=STK for stocks OR Ticker/Currency/InstrumentType=CASH for FX.
   * 
  **/
  PostAccountsAccountOrderImpact(
    req: operations.PostAccountsAccountOrderImpactRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostAccountsAccountOrderImpactResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostAccountsAccountOrderImpactRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/accounts/{account}/order_impact", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostAccountsAccountOrderImpactResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.postAccountsAccountOrderImpact200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 202:
            break;
          case 204:
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 408:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostAccountsAccountOrders - Place Order
  /** 
   * Places order
  **/
  PostAccountsAccountOrders(
    req: operations.PostAccountsAccountOrdersRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostAccountsAccountOrdersResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostAccountsAccountOrdersRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/accounts/{account}/orders", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostAccountsAccountOrdersResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.orderStates = httpRes?.data;
            }
            break;
          case 202:
            break;
          case 204:
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 408:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostOauthAccessToken - Obtain a access token
  /** 
   * Obtain an access token using the request token and the verification code you received after the user provided authorization. See section 6.3 of the OAuth v1.0a specification for more details. 
   * 
  **/
  PostOauthAccessToken(
    req: operations.PostOauthAccessTokenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostOauthAccessTokenResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostOauthAccessTokenRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/oauth/access_token";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostOauthAccessTokenResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.postOauthAccessToken200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 408:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostOauthLiveSessionToken - Obtain a live session token
  /** 
   * In order to access protected IB resources, a live session token is required. This endpoint allows consumers to obtain a live session token to access these resources using an OAuth access token and the Diffie-Hellman prime and generator supplied during the registration process.
   * Note this is an additional IB-specific step, and not part of the OAuth v1.0a specification. Please refer to the "OAuth at Interactive Brokers" document for more details.  https://www.interactivebrokers.com/webtradingapi/oauth.pdf
   * 
  **/
  PostOauthLiveSessionToken(
    req: operations.PostOauthLiveSessionTokenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostOauthLiveSessionTokenResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostOauthLiveSessionTokenRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/oauth/live_session_token";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostOauthLiveSessionTokenResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.postOauthLiveSessionToken200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 408:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PostOauthRequestToken - Obtain a request token
  /** 
   * Obtain a request token. See section 6.1 of the OAuth v1.0a specification for more information. http://oauth.net/core/1.0a/#auth_step1
   * 
   * Note we do not return an oauth_token_secret in the response as we are using RSA signatures rather than PLAINTEXT authentication. 
   * 
  **/
  PostOauthRequestToken(
    req: operations.PostOauthRequestTokenRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostOauthRequestTokenResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostOauthRequestTokenRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/oauth/request_token";
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .post(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PostOauthRequestTokenResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.postOauthRequestToken200ApplicationJsonObject = httpRes?.data;
            }
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 408:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

  
  // PutAccountsAccountOrdersCustomerOrderId - Modify Order
  /** 
   * Allows the caller to modify the order with the referenced Customer Order ID specified in the URL. A separate Customer Order ID must be provided in the request body for the modification.
  **/
  PutAccountsAccountOrdersCustomerOrderId(
    req: operations.PutAccountsAccountOrdersCustomerOrderIdRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PutAccountsAccountOrdersCustomerOrderIdResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PutAccountsAccountOrdersCustomerOrderIdRequest(req);
    }
    
    let baseURL: string = this.serverURL;
    const url: string = utils.GenerateURL(baseURL, "/accounts/{account}/orders/{CustomerOrderId}", req.pathParams);
    
    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = SerializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this.securityClient!;const headers = { ...reqBodyHeaders, ...config?.headers};
    
    let body: any;
    if (reqBody instanceof FormData) body = reqBody;
    else body = {...reqBody};
    
    if (body == null || Object.keys(body).length === 0) throw new Error("request body is required");
    
    return client
      .put(url, body, {
        headers: headers,
        ...config,
      })
      .then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        let res: operations.PutAccountsAccountOrdersCustomerOrderIdResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (httpRes?.status) {
          case 200:
            if (MatchContentType(contentType, `application/json`)) {
                res.putAccountsAccountOrdersCustomerOrderId200ApplicationJsonObjects = httpRes?.data;
            }
            break;
          case 202:
            break;
          case 204:
            break;
          case 400:
            break;
          case 401:
            break;
          case 403:
            break;
          case 408:
            break;
        }

        return res;
      })
      .catch((error: AxiosError) => {throw error});
  }

}
