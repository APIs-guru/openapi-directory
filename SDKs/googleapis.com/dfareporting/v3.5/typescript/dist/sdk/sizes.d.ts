import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Sizes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * dfareportingSizesGet - Gets one size by ID.
    **/
    dfareportingSizesGet(req: operations.DfareportingSizesGetRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingSizesGetResponse>;
    /**
     * dfareportingSizesInsert - Inserts a new size.
    **/
    dfareportingSizesInsert(req: operations.DfareportingSizesInsertRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingSizesInsertResponse>;
    /**
     * dfareportingSizesList - Retrieves a list of sizes, possibly filtered. Retrieved sizes are globally unique and may include values not currently in use by your account. Due to this, the list of sizes returned by this method may differ from the list seen in the Trafficking UI.
    **/
    dfareportingSizesList(req: operations.DfareportingSizesListRequest, config?: AxiosRequestConfig): Promise<operations.DfareportingSizesListResponse>;
}
