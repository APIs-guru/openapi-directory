import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Parts {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getGeomarksGeomarkIdPartsFileFormatExtension - Get the individual geometries within a multi-part geometry
     *
     * The geomark parts resource returns a one or more spatial features. One for each part of the Geomark's geomerty. Each part contains a single (Point, LineString, Polygon) geometry and the geomark attribution.
    **/
    getGeomarksGeomarkIdPartsFileFormatExtension(req: operations.GetGeomarksGeomarkIdPartsFileFormatExtensionRequest, config?: AxiosRequestConfig): Promise<operations.GetGeomarksGeomarkIdPartsFileFormatExtensionResponse>;
}
