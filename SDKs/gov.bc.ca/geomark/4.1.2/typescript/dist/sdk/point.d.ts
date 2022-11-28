import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Point {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getGeomarksGeomarkIdPointFileFormatExtension - Gets a single spatial point representative of the geomark.
     *
     * The geomark point resource returns a single spatial feature with a single Point and the geomark attribution.  The point geometry will be created from the first geometry part of the Geomark. Point geomarks will return the first Point part in the geomark.  LineString geomarks will return the first coordinate of the first LineString part in the geomark. Polygon geomarks will return the centroid or another point inside the first Polygon part in the geomark. The geometry and attribution can be downloaded as a spatial download file format in a supported coordinate system. The download files can then be used in a desktop GIS application (e.g. ArcMap), Google Earth or a web mapping application.
    **/
    getGeomarksGeomarkIdPointFileFormatExtension(req: operations.GetGeomarksGeomarkIdPointFileFormatExtensionRequest, config?: AxiosRequestConfig): Promise<operations.GetGeomarksGeomarkIdPointFileFormatExtensionResponse>;
}
