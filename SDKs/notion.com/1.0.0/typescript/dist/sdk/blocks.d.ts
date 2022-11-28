import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Blocks {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * appendBlockChildren - Append block children
     *
     * Append block children
    **/
    appendBlockChildren(req: operations.AppendBlockChildrenRequest, config?: AxiosRequestConfig): Promise<operations.AppendBlockChildrenResponse>;
    /**
     * retrieveABlock - Retrieve a block
     *
     * Retrieve a block
    **/
    retrieveABlock(req: operations.RetrieveABlockRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveABlockResponse>;
    /**
     * retrieveBlockChildren - Retrieve block children
     *
     * Retrieve block children
    **/
    retrieveBlockChildren(req: operations.RetrieveBlockChildrenRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveBlockChildrenResponse>;
    /**
     * updateABlock - Update a block
     *
     * This endpoint allows you to update block content. [See Full Documentation](https://developers.notion.com/reference/update-a-block)
    **/
    updateABlock(req: operations.UpdateABlockRequest, config?: AxiosRequestConfig): Promise<operations.UpdateABlockResponse>;
}
