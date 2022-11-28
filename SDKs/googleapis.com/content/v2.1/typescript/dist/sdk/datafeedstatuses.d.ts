import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Datafeedstatuses {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * contentDatafeedstatusesCustombatch - Gets multiple Merchant Center datafeed statuses in a single request.
    **/
    contentDatafeedstatusesCustombatch(req: operations.ContentDatafeedstatusesCustombatchRequest, config?: AxiosRequestConfig): Promise<operations.ContentDatafeedstatusesCustombatchResponse>;
    /**
     * contentDatafeedstatusesGet - Retrieves the status of a datafeed from your Merchant Center account.
    **/
    contentDatafeedstatusesGet(req: operations.ContentDatafeedstatusesGetRequest, config?: AxiosRequestConfig): Promise<operations.ContentDatafeedstatusesGetResponse>;
    /**
     * contentDatafeedstatusesList - Lists the statuses of the datafeeds in your Merchant Center account.
    **/
    contentDatafeedstatusesList(req: operations.ContentDatafeedstatusesListRequest, config?: AxiosRequestConfig): Promise<operations.ContentDatafeedstatusesListResponse>;
}
