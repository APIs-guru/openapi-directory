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
     * mirrorLocationsGet - Gets a single location by ID.
    **/
    mirrorLocationsGet(req: operations.MirrorLocationsGetRequest, config?: AxiosRequestConfig): Promise<operations.MirrorLocationsGetResponse>;
    /**
     * mirrorLocationsList - Retrieves a list of locations for the user.
    **/
    mirrorLocationsList(req: operations.MirrorLocationsListRequest, config?: AxiosRequestConfig): Promise<operations.MirrorLocationsListResponse>;
}
