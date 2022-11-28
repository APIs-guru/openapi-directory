import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Leg {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * deleteLeg - Delete a leg
    **/
    deleteLeg(req: operations.DeleteLegRequest, config?: AxiosRequestConfig): Promise<operations.DeleteLegResponse>;
    /**
     * listLegs - List legs
    **/
    listLegs(config?: AxiosRequestConfig): Promise<operations.ListLegsResponse>;
}
