import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Sets {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addItemIdsList - Add items to an existing list
    **/
    addItemIdsList(req: operations.AddItemIdsListRequest, config?: AxiosRequestConfig): Promise<operations.AddItemIdsListResponse>;
    /**
     * addItemIdsSpotList - Add spots to an existing list
    **/
    addItemIdsSpotList(req: operations.AddItemIdsSpotListRequest, config?: AxiosRequestConfig): Promise<operations.AddItemIdsSpotListResponse>;
    /**
     * addItemList - Create item list
    **/
    addItemList(req: operations.AddItemListRequest, config?: AxiosRequestConfig): Promise<operations.AddItemListResponse>;
    /**
     * addSpotList - Create spot list
    **/
    addSpotList(req: operations.AddSpotListRequest, config?: AxiosRequestConfig): Promise<operations.AddSpotListResponse>;
    /**
     * deleteItemIdFromItemList - Delete item from list
    **/
    deleteItemIdFromItemList(req: operations.DeleteItemIdFromItemListRequest, config?: AxiosRequestConfig): Promise<operations.DeleteItemIdFromItemListResponse>;
    /**
     * deleteItemIdFromSpotList - Delete spot from list
    **/
    deleteItemIdFromSpotList(req: operations.DeleteItemIdFromSpotListRequest, config?: AxiosRequestConfig): Promise<operations.DeleteItemIdFromSpotListResponse>;
    /**
     * deleteItemSet - Delete item list
    **/
    deleteItemSet(req: operations.DeleteItemSetRequest, config?: AxiosRequestConfig): Promise<operations.DeleteItemSetResponse>;
    /**
     * deleteSpotList - Delete spot list
    **/
    deleteSpotList(req: operations.DeleteSpotListRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSpotListResponse>;
    /**
     * getItemListById - Get item list
    **/
    getItemListById(req: operations.GetItemListByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetItemListByIdResponse>;
    /**
     * getItemListIdsById - Get item ids for this list
    **/
    getItemListIdsById(req: operations.GetItemListIdsByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetItemListIdsByIdResponse>;
    /**
     * getItemLists - Get all item lists
    **/
    getItemLists(req: operations.GetItemListsRequest, config?: AxiosRequestConfig): Promise<operations.GetItemListsResponse>;
    /**
     * getSpotListById - Info for a specific spot list
    **/
    getSpotListById(req: operations.GetSpotListByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSpotListByIdResponse>;
    /**
     * getSpotListIdsById - Get spot ids for this list
    **/
    getSpotListIdsById(req: operations.GetSpotListIdsByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSpotListIdsByIdResponse>;
    /**
     * getSpotLists - Get all spot lists
    **/
    getSpotLists(req: operations.GetSpotListsRequest, config?: AxiosRequestConfig): Promise<operations.GetSpotListsResponse>;
    /**
     * updateItemList - Update existing item list
    **/
    updateItemList(req: operations.UpdateItemListRequest, config?: AxiosRequestConfig): Promise<operations.UpdateItemListResponse>;
    /**
     * updateSpotList - Update existing spot list
    **/
    updateSpotList(req: operations.UpdateSpotListRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSpotListResponse>;
}
