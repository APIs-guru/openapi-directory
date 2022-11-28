import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Orderreports {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * contentOrderreportsListdisbursements - Retrieves a report for disbursements from your Merchant Center account.
    **/
    contentOrderreportsListdisbursements(req: operations.ContentOrderreportsListdisbursementsRequest, config?: AxiosRequestConfig): Promise<operations.ContentOrderreportsListdisbursementsResponse>;
    /**
     * contentOrderreportsListtransactions - Retrieves a list of transactions for a disbursement from your Merchant Center account.
    **/
    contentOrderreportsListtransactions(req: operations.ContentOrderreportsListtransactionsRequest, config?: AxiosRequestConfig): Promise<operations.ContentOrderreportsListtransactionsResponse>;
}
