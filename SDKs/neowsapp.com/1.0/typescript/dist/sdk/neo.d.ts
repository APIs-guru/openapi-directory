import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Neo {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * browseNearEarthObjects - Browse the Near Earth Objects service
     *
     * Retieve a paginated list of Near Earth Objects
    **/
    browseNearEarthObjects(req: operations.BrowseNearEarthObjectsRequest, config?: AxiosRequestConfig): Promise<operations.BrowseNearEarthObjectsResponse>;
    /**
     * retrieveNearEarthObjectById - Find Near Earth Objects by id
     *
     * Retrieve a Near Earth Objects with a given id
    **/
    retrieveNearEarthObjectById(req: operations.RetrieveNearEarthObjectByIdRequest, config?: AxiosRequestConfig): Promise<operations.RetrieveNearEarthObjectByIdResponse>;
}
