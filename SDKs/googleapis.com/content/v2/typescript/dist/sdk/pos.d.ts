import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Pos {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * contentPosCustombatch - Batches multiple POS-related calls in a single request.
    **/
    contentPosCustombatch(req: operations.ContentPosCustombatchRequest, config?: AxiosRequestConfig): Promise<operations.ContentPosCustombatchResponse>;
    /**
     * contentPosDelete - Deletes a store for the given merchant.
    **/
    contentPosDelete(req: operations.ContentPosDeleteRequest, config?: AxiosRequestConfig): Promise<operations.ContentPosDeleteResponse>;
    /**
     * contentPosGet - Retrieves information about the given store.
    **/
    contentPosGet(req: operations.ContentPosGetRequest, config?: AxiosRequestConfig): Promise<operations.ContentPosGetResponse>;
    /**
     * contentPosInsert - Creates a store for the given merchant.
    **/
    contentPosInsert(req: operations.ContentPosInsertRequest, config?: AxiosRequestConfig): Promise<operations.ContentPosInsertResponse>;
    /**
     * contentPosInventory - Submit inventory for the given merchant.
    **/
    contentPosInventory(req: operations.ContentPosInventoryRequest, config?: AxiosRequestConfig): Promise<operations.ContentPosInventoryResponse>;
    /**
     * contentPosList - Lists the stores of the target merchant.
    **/
    contentPosList(req: operations.ContentPosListRequest, config?: AxiosRequestConfig): Promise<operations.ContentPosListResponse>;
    /**
     * contentPosSale - Submit a sale event for the given merchant.
    **/
    contentPosSale(req: operations.ContentPosSaleRequest, config?: AxiosRequestConfig): Promise<operations.ContentPosSaleResponse>;
}
