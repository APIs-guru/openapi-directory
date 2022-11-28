import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Attributes {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * mybusinessAttributesList - Returns the list of available attributes that would be available for a location with the given primary category and country.
    **/
    mybusinessAttributesList(req: operations.MybusinessAttributesListRequest, config?: AxiosRequestConfig): Promise<operations.MybusinessAttributesListResponse>;
}
