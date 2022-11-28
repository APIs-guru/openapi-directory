import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class InventorySourceGroups {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * displayvideoInventorySourceGroupsAssignedInventorySourcesBulkEdit - Bulk edits multiple assignments between inventory sources and a single inventory source group. The operation will delete the assigned inventory sources provided in BulkEditAssignedInventorySourcesRequest.deleted_assigned_inventory_sources and then create the assigned inventory sources provided in BulkEditAssignedInventorySourcesRequest.created_assigned_inventory_sources.
    **/
    displayvideoInventorySourceGroupsAssignedInventorySourcesBulkEdit(req: operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesBulkEditResponse>;
    /**
     * displayvideoInventorySourceGroupsAssignedInventorySourcesCreate - Creates an assignment between an inventory source and an inventory source group.
    **/
    displayvideoInventorySourceGroupsAssignedInventorySourcesCreate(req: operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesCreateResponse>;
    /**
     * displayvideoInventorySourceGroupsAssignedInventorySourcesDelete - Deletes the assignment between an inventory source and an inventory source group.
    **/
    displayvideoInventorySourceGroupsAssignedInventorySourcesDelete(req: operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesDeleteResponse>;
    /**
     * displayvideoInventorySourceGroupsAssignedInventorySourcesList - Lists inventory sources assigned to an inventory source group.
    **/
    displayvideoInventorySourceGroupsAssignedInventorySourcesList(req: operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesListRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoInventorySourceGroupsAssignedInventorySourcesListResponse>;
    /**
     * displayvideoInventorySourceGroupsCreate - Creates a new inventory source group. Returns the newly created inventory source group if successful.
    **/
    displayvideoInventorySourceGroupsCreate(req: operations.DisplayvideoInventorySourceGroupsCreateRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoInventorySourceGroupsCreateResponse>;
    /**
     * displayvideoInventorySourceGroupsDelete - Deletes an inventory source group.
    **/
    displayvideoInventorySourceGroupsDelete(req: operations.DisplayvideoInventorySourceGroupsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoInventorySourceGroupsDeleteResponse>;
    /**
     * displayvideoInventorySourceGroupsGet - Gets an inventory source group.
    **/
    displayvideoInventorySourceGroupsGet(req: operations.DisplayvideoInventorySourceGroupsGetRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoInventorySourceGroupsGetResponse>;
    /**
     * displayvideoInventorySourceGroupsList - Lists inventory source groups that are accessible to the current user. The order is defined by the order_by parameter.
    **/
    displayvideoInventorySourceGroupsList(req: operations.DisplayvideoInventorySourceGroupsListRequest, config?: AxiosRequestConfig): Promise<operations.DisplayvideoInventorySourceGroupsListResponse>;
}
