import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Children {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * driveChildrenDelete - Removes a child from a folder.
    **/
    driveChildrenDelete(req: operations.DriveChildrenDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DriveChildrenDeleteResponse>;
    /**
     * driveChildrenGet - Gets a specific child reference.
    **/
    driveChildrenGet(req: operations.DriveChildrenGetRequest, config?: AxiosRequestConfig): Promise<operations.DriveChildrenGetResponse>;
    /**
     * driveChildrenInsert - Inserts a file into a folder.
    **/
    driveChildrenInsert(req: operations.DriveChildrenInsertRequest, config?: AxiosRequestConfig): Promise<operations.DriveChildrenInsertResponse>;
    /**
     * driveChildrenList - Lists a folder's children.
    **/
    driveChildrenList(req: operations.DriveChildrenListRequest, config?: AxiosRequestConfig): Promise<operations.DriveChildrenListResponse>;
}
