import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Info {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getGeomarksGeomarkIdFileFormatExtension - Get information about a particular geomark
     *
     * The attribution can be downloaded as a info file format. The download files can then be processed by a client application to access the geomark info fields and to get the URLs to the geometry download resources.
    **/
    getGeomarksGeomarkIdFileFormatExtension(req: operations.GetGeomarksGeomarkIdFileFormatExtensionRequest, config?: AxiosRequestConfig): Promise<operations.GetGeomarksGeomarkIdFileFormatExtensionResponse>;
}
