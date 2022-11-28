import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Drives {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * driveDrivesDelete - Permanently deletes a shared drive for which the user is an organizer. The shared drive cannot contain any untrashed items.
    **/
    driveDrivesDelete(req: operations.DriveDrivesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DriveDrivesDeleteResponse>;
    /**
     * driveDrivesGet - Gets a shared drive's metadata by ID.
    **/
    driveDrivesGet(req: operations.DriveDrivesGetRequest, config?: AxiosRequestConfig): Promise<operations.DriveDrivesGetResponse>;
    /**
     * driveDrivesHide - Hides a shared drive from the default view.
    **/
    driveDrivesHide(req: operations.DriveDrivesHideRequest, config?: AxiosRequestConfig): Promise<operations.DriveDrivesHideResponse>;
    /**
     * driveDrivesInsert - Creates a new shared drive.
    **/
    driveDrivesInsert(req: operations.DriveDrivesInsertRequest, config?: AxiosRequestConfig): Promise<operations.DriveDrivesInsertResponse>;
    /**
     * driveDrivesList - Lists the user's shared drives.
    **/
    driveDrivesList(req: operations.DriveDrivesListRequest, config?: AxiosRequestConfig): Promise<operations.DriveDrivesListResponse>;
    /**
     * driveDrivesUnhide - Restores a shared drive to the default view.
    **/
    driveDrivesUnhide(req: operations.DriveDrivesUnhideRequest, config?: AxiosRequestConfig): Promise<operations.DriveDrivesUnhideResponse>;
    /**
     * driveDrivesUpdate - Updates the metadata for a shared drive.
    **/
    driveDrivesUpdate(req: operations.DriveDrivesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DriveDrivesUpdateResponse>;
}
