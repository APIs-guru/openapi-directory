import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class AdvertiserInvoices {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * dfareportingAdvertiserInvoicesList - Retrieves a list of invoices for a particular issue month. The api only works if the billing profile invoice level is set to either advertiser or campaign non-consolidated invoice level.
    **/
    dfareportingAdvertiserInvoicesList(req: operations.DfareportingAdvertiserInvoicesListRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingAdvertiserInvoicesListResponse>;
}
