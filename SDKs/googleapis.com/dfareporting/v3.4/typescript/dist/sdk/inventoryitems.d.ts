import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class InventoryItems {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * dfareportingInventoryItemsGet - Gets one inventory item by ID.
    **/
    dfareportingInventoryItemsGet(req: operations.DfareportingInventoryItemsGetRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingInventoryItemsGetResponse>;
    /**
     * dfareportingInventoryItemsList - Retrieves a list of inventory items, possibly filtered. This method supports paging.
    **/
    dfareportingInventoryItemsList(req: operations.DfareportingInventoryItemsListRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingInventoryItemsListResponse>;
}
