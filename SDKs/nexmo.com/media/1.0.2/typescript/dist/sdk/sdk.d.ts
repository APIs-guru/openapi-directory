import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    /**
     * Delete a previously created media item by ID.
    **/
    DeleteAMediaItem(config?: AxiosRequestConfig): Promise<operations.DeleteAMediaItemResponse>;
    /**
     * Retrieve information about multiple media items with the ability to search and paginate.
    **/
    ListAndSearchMediaItems(req: operations.ListAndSearchMediaItemsRequest, config?: AxiosRequestConfig): Promise<operations.ListAndSearchMediaItemsResponse>;
    /**
     * Retrieve information about a single media item
    **/
    RetrieveAMediaItem(config?: AxiosRequestConfig): Promise<operations.RetrieveAMediaItemResponse>;
    /**
     * Update a previously created media item by ID.
    **/
    UpdateAMediaItem(req: operations.UpdateAMediaItemRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAMediaItemResponse>;
}
export {};
