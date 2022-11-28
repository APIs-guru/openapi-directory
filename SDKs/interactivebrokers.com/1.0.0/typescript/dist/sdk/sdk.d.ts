import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://www.interactivebrokers.com/tradingapi/v1"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * deleteAccountsAccountOrdersCustomerOrderId - Cancel Order
     *
     * Cancels the order with the referenced Customer Order ID for the account passed in the URL.
    **/
    deleteAccountsAccountOrdersCustomerOrderId(req: operations.DeleteAccountsAccountOrdersCustomerOrderIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAccountsAccountOrdersCustomerOrderIdResponse>;
    /**
     * getAccounts - Brokerage Accounts
     *
     * Allows the caller to request a list of accounts associated with the session.
    **/
    getAccounts(req: operations.GetAccountsRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountsResponse>;
    /**
     * getAccountsAccountOrders - Open Orders
     *
     * Returns a list of orders for the account passed in the URL
    **/
    getAccountsAccountOrders(req: operations.GetAccountsAccountOrdersRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountsAccountOrdersResponse>;
    /**
     * getAccountsAccountOrdersCustomerOrderId - Return specific order info
     *
     * Returns the order with the referenced Customer Order ID for the account passed in the URL.
    **/
    getAccountsAccountOrdersCustomerOrderId(req: operations.GetAccountsAccountOrdersCustomerOrderIdRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountsAccountOrdersCustomerOrderIdResponse>;
    /**
     * getAccountsAccountPositions - Account Positions
     *
     * Returns a list of positions for the indicated account.
    **/
    getAccountsAccountPositions(req: operations.GetAccountsAccountPositionsRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountsAccountPositionsResponse>;
    /**
     * getAccountsAccountSummary - Account Values Summary
     *
     * Returns a list of account and margin balances associated with the account passed in the URL
    **/
    getAccountsAccountSummary(req: operations.GetAccountsAccountSummaryRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountsAccountSummaryResponse>;
    /**
     * getMarketdataExchangeComponents - Exchange Components
     *
     * This endpoint provides a bit mapping for the bid/ask/last 'market' values in the snapshot response.
    **/
    getMarketdataExchangeComponents(config?: AxiosRequestConfig): Promise<operations.GetMarketdataExchangeComponentsResponse>;
    /**
     * postAccountsAccountOrderImpact - Return margin impact info
     *
     * This endpoint allows the consumer to check the impact that an order would have on the account, including margin, NLV and estimated commission costs.
     * To specify the contract, you provide a value for the ContractId field, OR Ticker/ListingExchange/InstrumentType=STK for stocks OR Ticker/Currency/InstrumentType=CASH for FX.
     *
    **/
    postAccountsAccountOrderImpact(req: operations.PostAccountsAccountOrderImpactRequest, config?: AxiosRequestConfig): Promise<operations.PostAccountsAccountOrderImpactResponse>;
    /**
     * postAccountsAccountOrders - Place Order
     *
     * Places order
    **/
    postAccountsAccountOrders(req: operations.PostAccountsAccountOrdersRequest, config?: AxiosRequestConfig): Promise<operations.PostAccountsAccountOrdersResponse>;
    /**
     * postOauthAccessToken - Obtain a access token
     *
     * Obtain an access token using the request token and the verification code you received after the user provided authorization. See section 6.3 of the OAuth v1.0a specification for more details.
     *
    **/
    postOauthAccessToken(req: operations.PostOauthAccessTokenRequest, config?: AxiosRequestConfig): Promise<operations.PostOauthAccessTokenResponse>;
    /**
     * postOauthLiveSessionToken - Obtain a live session token
     *
     * In order to access protected IB resources, a live session token is required. This endpoint allows consumers to obtain a live session token to access these resources using an OAuth access token and the Diffie-Hellman prime and generator supplied during the registration process.
     * Note this is an additional IB-specific step, and not part of the OAuth v1.0a specification. Please refer to the "OAuth at Interactive Brokers" document for more details.  https://www.interactivebrokers.com/webtradingapi/oauth.pdf
     *
    **/
    postOauthLiveSessionToken(req: operations.PostOauthLiveSessionTokenRequest, config?: AxiosRequestConfig): Promise<operations.PostOauthLiveSessionTokenResponse>;
    /**
     * postOauthRequestToken - Obtain a request token
     *
     * Obtain a request token. See section 6.1 of the OAuth v1.0a specification for more information. http://oauth.net/core/1.0a/#auth_step1
     *
     * Note we do not return an oauth_token_secret in the response as we are using RSA signatures rather than PLAINTEXT authentication.
     *
    **/
    postOauthRequestToken(req: operations.PostOauthRequestTokenRequest, config?: AxiosRequestConfig): Promise<operations.PostOauthRequestTokenResponse>;
    /**
     * putAccountsAccountOrdersCustomerOrderId - Modify Order
     *
     * Allows the caller to modify the order with the referenced Customer Order ID specified in the URL. A separate Customer Order ID must be provided in the request body for the modification.
    **/
    putAccountsAccountOrdersCustomerOrderId(req: operations.PutAccountsAccountOrdersCustomerOrderIdRequest, config?: AxiosRequestConfig): Promise<operations.PutAccountsAccountOrdersCustomerOrderIdResponse>;
}
export {};
