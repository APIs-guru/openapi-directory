import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Transfers {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * retrieveBalanceTransfers - Retrieve list of balance transfers
     *
     * Retrieve a list of balance transfers that have taken place for a primary account within a specified time period.
     *
    **/
    retrieveBalanceTransfers(req: operations.RetrieveBalanceTransfersRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveBalanceTransfersResponse>;
    /**
     * retrieveCreditTransfers - Retrieve list of credit transfers
     *
     * Retrieve a list of credit transfers that have taken place for a primary account within a specified time period.
     *
    **/
    retrieveCreditTransfers(req: operations.RetrieveCreditTransfersRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveCreditTransfersResponse>;
    /**
     * transferBalance - Transfer balance
     *
     * Transfer balance between a primary account and one of its subaccounts. Note that balance_available_for_transfer = |account_balance - credit_limit| of the source account.
     *
    **/
    transferBalance(req: operations.TransferBalanceRequest, config?: AxiosRequestConfig): Promise<operations.TransferBalanceResponse>;
    /**
     * transferCredit - Transfer credit
     *
     * Transfer credit limit between a primary account and one of its subaccounts.
     *
    **/
    transferCredit(req: operations.TransferCreditRequest, config?: AxiosRequestConfig): Promise<operations.TransferCreditResponse>;
    /**
     * transferNumber - Transfer number
     *
     * Transfer number from one account to another.
     *
    **/
    transferNumber(req: operations.TransferNumberRequest, config?: AxiosRequestConfig): Promise<operations.TransferNumberResponse>;
}
