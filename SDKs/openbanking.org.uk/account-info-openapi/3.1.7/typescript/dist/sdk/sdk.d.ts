import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://openbanking.org.uk", "https://openbanking.org.uk/open-banking/v3.1/aisp"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * createAccountAccessConsents - Create Account Access Consents
    **/
    createAccountAccessConsents(req: operations.CreateAccountAccessConsentsRequest, config?: AxiosRequestConfig): Promise<operations.CreateAccountAccessConsentsResponse>;
    /**
     * deleteAccountAccessConsentsConsentId - Delete Account Access Consents
    **/
    deleteAccountAccessConsentsConsentId(req: operations.DeleteAccountAccessConsentsConsentIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAccountAccessConsentsConsentIdResponse>;
    /**
     * getAccountAccessConsentsConsentId - Get Account Access Consents
    **/
    getAccountAccessConsentsConsentId(req: operations.GetAccountAccessConsentsConsentIdRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountAccessConsentsConsentIdResponse>;
    /**
     * getAccounts - Get Accounts
    **/
    getAccounts(req: operations.GetAccountsRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountsResponse>;
    /**
     * getAccountsAccountId - Get Accounts
    **/
    getAccountsAccountId(req: operations.GetAccountsAccountIdRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountsAccountIdResponse>;
    /**
     * getAccountsAccountIdBalances - Get Balances
    **/
    getAccountsAccountIdBalances(req: operations.GetAccountsAccountIdBalancesRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountsAccountIdBalancesResponse>;
    /**
     * getAccountsAccountIdBeneficiaries - Get Beneficiaries
    **/
    getAccountsAccountIdBeneficiaries(req: operations.GetAccountsAccountIdBeneficiariesRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountsAccountIdBeneficiariesResponse>;
    /**
     * getAccountsAccountIdDirectDebits - Get Direct Debits
    **/
    getAccountsAccountIdDirectDebits(req: operations.GetAccountsAccountIdDirectDebitsRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountsAccountIdDirectDebitsResponse>;
    /**
     * getAccountsAccountIdOffers - Get Offers
    **/
    getAccountsAccountIdOffers(req: operations.GetAccountsAccountIdOffersRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountsAccountIdOffersResponse>;
    /**
     * getAccountsAccountIdParties - Get Parties
    **/
    getAccountsAccountIdParties(req: operations.GetAccountsAccountIdPartiesRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountsAccountIdPartiesResponse>;
    /**
     * getAccountsAccountIdParty - Get Parties
    **/
    getAccountsAccountIdParty(req: operations.GetAccountsAccountIdPartyRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountsAccountIdPartyResponse>;
    /**
     * getAccountsAccountIdProduct - Get Products
    **/
    getAccountsAccountIdProduct(req: operations.GetAccountsAccountIdProductRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountsAccountIdProductResponse>;
    /**
     * getAccountsAccountIdScheduledPayments - Get Scheduled Payments
    **/
    getAccountsAccountIdScheduledPayments(req: operations.GetAccountsAccountIdScheduledPaymentsRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountsAccountIdScheduledPaymentsResponse>;
    /**
     * getAccountsAccountIdStandingOrders - Get Standing Orders
    **/
    getAccountsAccountIdStandingOrders(req: operations.GetAccountsAccountIdStandingOrdersRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountsAccountIdStandingOrdersResponse>;
    /**
     * getAccountsAccountIdStatements - Get Statements
    **/
    getAccountsAccountIdStatements(req: operations.GetAccountsAccountIdStatementsRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountsAccountIdStatementsResponse>;
    /**
     * getAccountsAccountIdStatementsStatementId - Get Statements
    **/
    getAccountsAccountIdStatementsStatementId(req: operations.GetAccountsAccountIdStatementsStatementIdRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountsAccountIdStatementsStatementIdResponse>;
    /**
     * getAccountsAccountIdStatementsStatementIdFile - Get Statements
    **/
    getAccountsAccountIdStatementsStatementIdFile(req: operations.GetAccountsAccountIdStatementsStatementIdFileRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountsAccountIdStatementsStatementIdFileResponse>;
    /**
     * getAccountsAccountIdStatementsStatementIdTransactions - Get Transactions
    **/
    getAccountsAccountIdStatementsStatementIdTransactions(req: operations.GetAccountsAccountIdStatementsStatementIdTransactionsRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountsAccountIdStatementsStatementIdTransactionsResponse>;
    /**
     * getAccountsAccountIdTransactions - Get Transactions
    **/
    getAccountsAccountIdTransactions(req: operations.GetAccountsAccountIdTransactionsRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountsAccountIdTransactionsResponse>;
    /**
     * getBalances - Get Balances
    **/
    getBalances(req: operations.GetBalancesRequest, config?: AxiosRequestConfig): Promise<operations.GetBalancesResponse>;
    /**
     * getBeneficiaries - Get Beneficiaries
    **/
    getBeneficiaries(req: operations.GetBeneficiariesRequest, config?: AxiosRequestConfig): Promise<operations.GetBeneficiariesResponse>;
    /**
     * getDirectDebits - Get Direct Debits
    **/
    getDirectDebits(req: operations.GetDirectDebitsRequest, config?: AxiosRequestConfig): Promise<operations.GetDirectDebitsResponse>;
    /**
     * getOffers - Get Offers
    **/
    getOffers(req: operations.GetOffersRequest, config?: AxiosRequestConfig): Promise<operations.GetOffersResponse>;
    /**
     * getParty - Get Parties
    **/
    getParty(req: operations.GetPartyRequest, config?: AxiosRequestConfig): Promise<operations.GetPartyResponse>;
    /**
     * getProducts - Get Products
    **/
    getProducts(req: operations.GetProductsRequest, config?: AxiosRequestConfig): Promise<operations.GetProductsResponse>;
    /**
     * getScheduledPayments - Get Scheduled Payments
    **/
    getScheduledPayments(req: operations.GetScheduledPaymentsRequest, config?: AxiosRequestConfig): Promise<operations.GetScheduledPaymentsResponse>;
    /**
     * getStandingOrders - Get Standing Orders
    **/
    getStandingOrders(req: operations.GetStandingOrdersRequest, config?: AxiosRequestConfig): Promise<operations.GetStandingOrdersResponse>;
    /**
     * getStatements - Get Statements
    **/
    getStatements(req: operations.GetStatementsRequest, config?: AxiosRequestConfig): Promise<operations.GetStatementsResponse>;
    /**
     * getTransactions - Get Transactions
    **/
    getTransactions(req: operations.GetTransactionsRequest, config?: AxiosRequestConfig): Promise<operations.GetTransactionsResponse>;
}
export {};
