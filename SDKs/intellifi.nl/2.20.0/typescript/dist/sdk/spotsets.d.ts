import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Spotsets {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getSpotsets - Get spotsets
    **/
    getSpotsets(config?: AxiosRequestConfig): Promise<operations.GetSpotsetsResponse>;
    /**
     * getSpotsetsId - Get spotset
    **/
    getSpotsetsId(req: operations.GetSpotsetsIdRequest, config?: AxiosRequestConfig): Promise<operations.GetSpotsetsIdResponse>;
    /**
     * postSpotsets - Create spotset
    **/
    postSpotsets(req: operations.PostSpotsetsRequest, config?: AxiosRequestConfig): Promise<operations.PostSpotsetsResponse>;
    /**
     * putSpotsetsId - Update existing spotset
    **/
    putSpotsetsId(req: operations.PutSpotsetsIdRequest, config?: AxiosRequestConfig): Promise<operations.PutSpotsetsIdResponse>;
}
