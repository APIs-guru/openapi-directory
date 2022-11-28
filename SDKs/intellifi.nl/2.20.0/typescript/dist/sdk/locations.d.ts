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
     * addLocation - Create location
    **/
    addLocation(req: operations.AddLocationRequest, config?: AxiosRequestConfig): Promise<operations.AddLocationResponse>;
    /**
     * deleteLocation - Delete location
    **/
    deleteLocation(req: operations.DeleteLocationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteLocationResponse>;
    /**
     * getLocationById - Get location
    **/
    getLocationById(req: operations.GetLocationByIdRequest, config?: AxiosRequestConfig): Promise<operations.GetLocationByIdResponse>;
    /**
     * getLocations - Get all locations
    **/
    getLocations(req: operations.GetLocationsRequest, config?: AxiosRequestConfig): Promise<operations.GetLocationsResponse>;
    /**
     * updateLocation - Update existing location
    **/
    updateLocation(req: operations.UpdateLocationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateLocationResponse>;
}
