import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Teamdrives {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * driveTeamdrivesDelete - Deprecated use drives.delete instead.
    **/
    driveTeamdrivesDelete(req: operations.DriveTeamdrivesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DriveTeamdrivesDeleteResponse>;
    /**
     * driveTeamdrivesGet - Deprecated use drives.get instead.
    **/
    driveTeamdrivesGet(req: operations.DriveTeamdrivesGetRequest, config?: AxiosRequestConfig): Promise<operations.DriveTeamdrivesGetResponse>;
    /**
     * driveTeamdrivesInsert - Deprecated use drives.insert instead.
    **/
    driveTeamdrivesInsert(req: operations.DriveTeamdrivesInsertRequest, config?: AxiosRequestConfig): Promise<operations.DriveTeamdrivesInsertResponse>;
    /**
     * driveTeamdrivesList - Deprecated use drives.list instead.
    **/
    driveTeamdrivesList(req: operations.DriveTeamdrivesListRequest, config?: AxiosRequestConfig): Promise<operations.DriveTeamdrivesListResponse>;
    /**
     * driveTeamdrivesUpdate - Deprecated use drives.update instead.
    **/
    driveTeamdrivesUpdate(req: operations.DriveTeamdrivesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DriveTeamdrivesUpdateResponse>;
}
