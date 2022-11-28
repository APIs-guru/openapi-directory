import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Branch {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getBranches - Gets a list of all `Branch` objects.
    **/
    getBranches(req: operations.GetBranchesRequest, config?: AxiosRequestConfig): Promise<operations.GetBranchesResponse>;
    /**
     * headBranches - Gets header information on the current set of `Branch` data
    **/
    headBranches(req: operations.HeadBranchesRequest, config?: AxiosRequestConfig): Promise<operations.HeadBranchesResponse>;
}
