import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class ProjectCategory {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getProjectCategoryList - List the project categories
     *
     * List the project categories
    **/
    getProjectCategoryList(req: operations.GetProjectCategoryListRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectCategoryListResponse>;
    /**
     * getProjectCategoryListOfClient - List the project categories of client side
     *
     * List the project categories of client side
    **/
    getProjectCategoryListOfClient(req: operations.GetProjectCategoryListOfClientRequest, config?: AxiosRequestConfig): Promise<operations.GetProjectCategoryListOfClientResponse>;
}
