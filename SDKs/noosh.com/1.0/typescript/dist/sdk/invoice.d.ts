import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Invoice {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getInvoice - List a specific invoice of project Level
     *
     * List a specific invoice of project Level
    **/
    getInvoice(req: operations.GetInvoiceRequest, config?: AxiosRequestConfig): Promise<operations.GetInvoiceResponse>;
    /**
     * getInvoiceFiles - List files of invoice Level
     *
     * List files of invoice Level
    **/
    getInvoiceFiles(req: operations.GetInvoiceFilesRequest, config?: AxiosRequestConfig): Promise<operations.GetInvoiceFilesResponse>;
    /**
     * getInvoices - List invoices by a specific order
     *
     * List invoices by a specific order
    **/
    getInvoices(req: operations.GetInvoicesRequest, config?: AxiosRequestConfig): Promise<operations.GetInvoicesResponse>;
}
