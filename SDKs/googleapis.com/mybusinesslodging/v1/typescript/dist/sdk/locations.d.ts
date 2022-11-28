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
     * mybusinesslodgingLocationsGetLodging - Returns the Lodging of a specific location.
    **/
    mybusinesslodgingLocationsGetLodging(req: operations.MybusinesslodgingLocationsGetLodgingRequest, config?: AxiosRequestConfig): Promise<operations.MybusinesslodgingLocationsGetLodgingResponse>;
    /**
     * mybusinesslodgingLocationsLodgingGetGoogleUpdated - Returns the Google updated Lodging of a specific location.
    **/
    mybusinesslodgingLocationsLodgingGetGoogleUpdated(req: operations.MybusinesslodgingLocationsLodgingGetGoogleUpdatedRequest, config?: AxiosRequestConfig): Promise<operations.MybusinesslodgingLocationsLodgingGetGoogleUpdatedResponse>;
    /**
     * mybusinesslodgingLocationsUpdateLodging - Updates the Lodging of a specific location.
    **/
    mybusinesslodgingLocationsUpdateLodging(req: operations.MybusinesslodgingLocationsUpdateLodgingRequest, config?: AxiosRequestConfig): Promise<operations.MybusinesslodgingLocationsUpdateLodgingResponse>;
}
