import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Items {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addItem - Create item
    **/
    addItem(req: operations.AddItemRequest, config?: AxiosRequestConfig): Promise<operations.AddItemResponse>;
    /**
     * deleteItem - Delete item
    **/
    deleteItem(req: operations.DeleteItemRequest, config?: AxiosRequestConfig): Promise<operations.DeleteItemResponse>;
    /**
     * getItemById - Get item
    **/
    getItemById(req: operations.GetItemByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetItemByIdResponse>;
    /**
     * getItems - Get all items
    **/
    getItems(req: operations.GetItemsRequest, config?: AxiosRequestConfig): Promise<operations.GetItemsResponse>;
    /**
     * updateItem - Update existing item
    **/
    updateItem(req: operations.UpdateItemRequest, config?: AxiosRequestConfig): Promise<operations.UpdateItemResponse>;
}
