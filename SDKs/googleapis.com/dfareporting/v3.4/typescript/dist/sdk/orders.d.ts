import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Orders {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * dfareportingOrdersGet - Gets one order by ID.
    **/
    dfareportingOrdersGet(req: operations.DfareportingOrdersGetRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingOrdersGetResponse>;
    /**
     * dfareportingOrdersList - Retrieves a list of orders, possibly filtered. This method supports paging.
    **/
    dfareportingOrdersList(req: operations.DfareportingOrdersListRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingOrdersListResponse>;
}
