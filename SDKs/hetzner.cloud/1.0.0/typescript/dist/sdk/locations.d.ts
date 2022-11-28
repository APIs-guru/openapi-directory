import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Locations {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getLocations - Get all Locations
     *
     * Returns all Location objects.
    **/
    getLocations(req: operations.GetLocationsRequest, config?: AxiosRequestConfig): Promise<operations.GetLocationsResponse>;
    /**
     * getLocationsId - Get a Location
     *
     * Returns a specific Location object.
    **/
    getLocationsId(req: operations.GetLocationsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetLocationsIdResponse>;
}
