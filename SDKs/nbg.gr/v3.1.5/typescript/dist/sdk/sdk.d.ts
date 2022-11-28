import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://apis.nbg.gr/sandbox/uk.openbanking.accountinfo/oauth2/v3.1.5", "https://services.nbg.gr/apis/open-banking/v3.1.5/aisp"];
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
     * deleteAccountAccessConsentsConsentId - Delete Account Access Consents
     *
     * Delete Account Access Consents by Consent ID
    **/
    deleteAccountAccessConsentsConsentId(req: operations.DeleteAccountAccessConsentsConsentIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAccountAccessConsentsConsentIdResponse>;
    /**
     * deleteSandboxSandboxId - Delete Sandbox
     *
     * Delete Sandbox
    **/
    deleteSandboxSandboxId(req: operations.DeleteSandboxSandboxIdRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSandboxSandboxIdResponse>;
    /**
     * getAccountAccessConsentsConsentId - Get Account Access Consents
     *
     * Get Account Access Consents by Consent ID
    **/
    getAccountAccessConsentsConsentId(req: operations.GetAccountAccessConsentsConsentIdRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountAccessConsentsConsentIdResponse>;
    /**
     * getAccounts - Get Accounts
     *
     * Get Accounts
    **/
    getAccounts(req: operations.GetAccountsRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountsResponse>;
    /**
     * getAccountsAccountId - Get Accounts
     *
     * Get Accounts by Account ID
    **/
    getAccountsAccountId(req: operations.GetAccountsAccountIdRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountsAccountIdResponse>;
    /**
     * getAccountsAccountIdBalances - Get Balances
     *
     * Get Balances by Account ID
    **/
    getAccountsAccountIdBalances(req: operations.GetAccountsAccountIdBalancesRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountsAccountIdBalancesResponse>;
    /**
     * getAccountsAccountIdBeneficiaries - Get Beneficiaries
     *
     * Get Beneficiaries by Account ID
    **/
    getAccountsAccountIdBeneficiaries(req: operations.GetAccountsAccountIdBeneficiariesRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountsAccountIdBeneficiariesResponse>;
    /**
     * getAccountsAccountIdParties - Get Parties
     *
     * Get Parties by Account ID
    **/
    getAccountsAccountIdParties(req: operations.GetAccountsAccountIdPartiesRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountsAccountIdPartiesResponse>;
    /**
     * getAccountsAccountIdParty - Get Party
     *
     * Get Party by Account ID
    **/
    getAccountsAccountIdParty(req: operations.GetAccountsAccountIdPartyRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountsAccountIdPartyResponse>;
    /**
     * getAccountsAccountIdScheduledPayments - Get Scheduled Payments
     *
     * Get Scheduled Payments by Account ID
    **/
    getAccountsAccountIdScheduledPayments(req: operations.GetAccountsAccountIdScheduledPaymentsRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountsAccountIdScheduledPaymentsResponse>;
    /**
     * getAccountsAccountIdStandingOrders - Get Standing Orders
     *
     * Get Standing Orders by Account ID
    **/
    getAccountsAccountIdStandingOrders(req: operations.GetAccountsAccountIdStandingOrdersRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountsAccountIdStandingOrdersResponse>;
    /**
     * getAccountsAccountIdStatements - Get Statements
     *
     * Get Statements by Account ID
    **/
    getAccountsAccountIdStatements(req: operations.GetAccountsAccountIdStatementsRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountsAccountIdStatementsResponse>;
    /**
     * getAccountsAccountIdStatementsStatementId - Get Statements
     *
     * Get Statements by Account ID and Statement ID
    **/
    getAccountsAccountIdStatementsStatementId(req: operations.GetAccountsAccountIdStatementsStatementIdRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountsAccountIdStatementsStatementIdResponse>;
    /**
     * getAccountsAccountIdStatementsStatementIdFile - Get Statements
     *
     * Get Statement PDF File by Account ID and Statement ID
    **/
    getAccountsAccountIdStatementsStatementIdFile(req: operations.GetAccountsAccountIdStatementsStatementIdFileRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountsAccountIdStatementsStatementIdFileResponse>;
    /**
     * getAccountsAccountIdStatementsStatementIdTransactions - Get Transactions
     *
     * Get Transactions by Account ID and Statement ID
    **/
    getAccountsAccountIdStatementsStatementIdTransactions(req: operations.GetAccountsAccountIdStatementsStatementIdTransactionsRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountsAccountIdStatementsStatementIdTransactionsResponse>;
    /**
     * getAccountsAccountIdTransactions - Get Transactions
     *
     * Get Transactions by Account ID
    **/
    getAccountsAccountIdTransactions(req: operations.GetAccountsAccountIdTransactionsRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountsAccountIdTransactionsResponse>;
    /**
     * getParty - Get Party
     *
     * Get Party
    **/
    getParty(req: operations.GetPartyRequest, config?: AxiosRequestConfig): Promise<operations.GetPartyResponse>;
    /**
     * getSandboxSandboxId - Export Sandbox
     *
     * Export Sandbox
    **/
    getSandboxSandboxId(req: operations.GetSandboxSandboxIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSandboxSandboxIdResponse>;
    /**
     * postAccountAccessConsents - Create Account Access Consents
     *
     * Create Account Access Consents
    **/
    postAccountAccessConsents(req: operations.PostAccountAccessConsentsRequest, config?: AxiosRequestConfig): Promise<operations.PostAccountAccessConsentsResponse>;
    /**
     * postSandbox - Create Sandbox
     *
     * Create Sandbox
    **/
    postSandbox(req: operations.PostSandboxRequest, config?: AxiosRequestConfig): Promise<operations.PostSandboxResponse>;
    /**
     * putSandbox - Import Sandbox
     *
     * Import Sandbox
    **/
    putSandbox(req: operations.PutSandboxRequest, config?: AxiosRequestConfig): Promise<operations.PutSandboxResponse>;
}
export {};
