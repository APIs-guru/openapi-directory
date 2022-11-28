import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Parents {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * driveParentsDelete - Removes a parent from a file.
    **/
    driveParentsDelete(req: operations.DriveParentsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DriveParentsDeleteResponse>;
    /**
     * driveParentsGet - Gets a specific parent reference.
    **/
    driveParentsGet(req: operations.DriveParentsGetRequest, config?: AxiosRequestConfig): Promise<operations.DriveParentsGetResponse>;
    /**
     * driveParentsInsert - Adds a parent folder for a file.
    **/
    driveParentsInsert(req: operations.DriveParentsInsertRequest, config?: AxiosRequestConfig): Promise<operations.DriveParentsInsertResponse>;
    /**
     * driveParentsList - Lists a file's parents.
    **/
    driveParentsList(req: operations.DriveParentsListRequest, config?: AxiosRequestConfig): Promise<operations.DriveParentsListResponse>;
}
