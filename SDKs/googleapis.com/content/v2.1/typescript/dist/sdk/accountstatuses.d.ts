import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Accountstatuses {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * contentAccountstatusesCustombatch - Retrieves multiple Merchant Center account statuses in a single request.
    **/
    contentAccountstatusesCustombatch(req: operations.ContentAccountstatusesCustombatchRequest, config?: AxiosRequestConfig): Promise<operations.ContentAccountstatusesCustombatchResponse>;
    /**
     * contentAccountstatusesGet - Retrieves the status of a Merchant Center account. No itemLevelIssues are returned for multi-client accounts.
    **/
    contentAccountstatusesGet(req: operations.ContentAccountstatusesGetRequest, config?: AxiosRequestConfig): Promise<operations.ContentAccountstatusesGetResponse>;
    /**
     * contentAccountstatusesList - Lists the statuses of the sub-accounts in your Merchant Center account.
    **/
    contentAccountstatusesList(req: operations.ContentAccountstatusesListRequest, config?: AxiosRequestConfig): Promise<operations.ContentAccountstatusesListResponse>;
}
