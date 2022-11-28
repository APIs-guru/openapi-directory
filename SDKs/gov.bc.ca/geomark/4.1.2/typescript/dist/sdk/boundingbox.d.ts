import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class BoundingBox {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getGeomarksGeomarkIdBoundingBoxFileFormatExtension - Gets the bounding box of the geomark
     *
     * The source geomarks can be specified by with the geomarkUrl parameter.  Repeat the parameter if sourcing from multiple geomarks
    **/
    getGeomarksGeomarkIdBoundingBoxFileFormatExtension(req: operations.GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionRequest, config?: AxiosRequestConfig): Promise<operations.GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionResponse>;
}
