import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Collectionstatuses {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * contentCollectionstatusesGet - Gets the status of a collection from your Merchant Center account.
    **/
    contentCollectionstatusesGet(req: operations.ContentCollectionstatusesGetRequest, config?: AxiosRequestConfig): Promise<operations.ContentCollectionstatusesGetResponse>;
    /**
     * contentCollectionstatusesList - Lists the statuses of the collections in your Merchant Center account.
    **/
    contentCollectionstatusesList(req: operations.ContentCollectionstatusesListRequest, config?: AxiosRequestConfig): Promise<operations.ContentCollectionstatusesListResponse>;
}
