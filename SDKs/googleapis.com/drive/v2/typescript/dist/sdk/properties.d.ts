import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Properties {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * drivePropertiesDelete - Deletes a property.
    **/
    drivePropertiesDelete(req: operations.DrivePropertiesDeleteRequest, config?: AxiosRequestConfig): Promise<operations.DrivePropertiesDeleteResponse>;
    /**
     * drivePropertiesGet - Gets a property by its key.
    **/
    drivePropertiesGet(req: operations.DrivePropertiesGetRequest, config?: AxiosRequestConfig): Promise<operations.DrivePropertiesGetResponse>;
    /**
     * drivePropertiesInsert - Adds a property to a file, or updates it if it already exists.
    **/
    drivePropertiesInsert(req: operations.DrivePropertiesInsertRequest, config?: AxiosRequestConfig): Promise<operations.DrivePropertiesInsertResponse>;
    /**
     * drivePropertiesList - Lists a file's properties.
    **/
    drivePropertiesList(req: operations.DrivePropertiesListRequest, config?: AxiosRequestConfig): Promise<operations.DrivePropertiesListResponse>;
    /**
     * drivePropertiesPatch - Updates a property.
    **/
    drivePropertiesPatch(req: operations.DrivePropertiesPatchRequest, config?: AxiosRequestConfig): Promise<operations.DrivePropertiesPatchResponse>;
    /**
     * drivePropertiesUpdate - Updates a property.
    **/
    drivePropertiesUpdate(req: operations.DrivePropertiesUpdateRequest, config?: AxiosRequestConfig): Promise<operations.DrivePropertiesUpdateResponse>;
}
