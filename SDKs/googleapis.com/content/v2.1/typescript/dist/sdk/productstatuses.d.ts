import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Productstatuses {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * contentProductstatusesCustombatch - Gets the statuses of multiple products in a single request.
    **/
    contentProductstatusesCustombatch(req: operations.ContentProductstatusesCustombatchRequest, config?: AxiosRequestConfig): Promise<operations.ContentProductstatusesCustombatchResponse>;
    /**
     * contentProductstatusesGet - Gets the status of a product from your Merchant Center account.
    **/
    contentProductstatusesGet(req: operations.ContentProductstatusesGetRequest, config?: AxiosRequestConfig): Promise<operations.ContentProductstatusesGetResponse>;
    /**
     * contentProductstatusesList - Lists the statuses of the products in your Merchant Center account.
    **/
    contentProductstatusesList(req: operations.ContentProductstatusesListRequest, config?: AxiosRequestConfig): Promise<operations.ContentProductstatusesListResponse>;
    /**
     * contentProductstatusesRepricingreportsList - Lists the metrics report for a given Repricing product.
    **/
    contentProductstatusesRepricingreportsList(req: operations.ContentProductstatusesRepricingreportsListRequest, config?: AxiosRequestConfig): Promise<operations.ContentProductstatusesRepricingreportsListResponse>;
}
