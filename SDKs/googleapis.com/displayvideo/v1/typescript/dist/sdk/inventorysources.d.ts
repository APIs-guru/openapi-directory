import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class InventorySources {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * displayvideoInventorySourcesCreate - Creates a new inventory source. Returns the newly created inventory source if successful.
    **/
    displayvideoInventorySourcesCreate(req: operations.DisplayvideoInventorySourcesCreateRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoInventorySourcesCreateResponse>;
    /**
     * displayvideoInventorySourcesEditInventorySourceReadWriteAccessors - Edits read/write accessors of an inventory source. Returns the updated read_write_accessors for the inventory source.
    **/
    displayvideoInventorySourcesEditInventorySourceReadWriteAccessors(req: operations.DisplayvideoInventorySourcesEditInventorySourceReadWriteAccessorsRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoInventorySourcesEditInventorySourceReadWriteAccessorsResponse>;
    /**
     * displayvideoInventorySourcesGet - Gets an inventory source.
    **/
    displayvideoInventorySourcesGet(req: operations.DisplayvideoInventorySourcesGetRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoInventorySourcesGetResponse>;
    /**
     * displayvideoInventorySourcesList - Lists inventory sources that are accessible to the current user. The order is defined by the order_by parameter. If a filter by entity_status is not specified, inventory sources with entity status `ENTITY_STATUS_ARCHIVED` will not be included in the results.
    **/
    displayvideoInventorySourcesList(req: operations.DisplayvideoInventorySourcesListRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoInventorySourcesListResponse>;
    /**
     * displayvideoInventorySourcesPatch - Updates an existing inventory source. Returns the updated inventory source if successful.
    **/
    displayvideoInventorySourcesPatch(req: operations.DisplayvideoInventorySourcesPatchRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoInventorySourcesPatchResponse>;
}
