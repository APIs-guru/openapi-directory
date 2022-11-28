import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Feature {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getGeomarksGeomarkIdFeatureFileFormatExtension - Get the feature and attribution of the geomark
     *
     * The geomark feature resource returns a single spatial feature with either a single (Point, LineString, Polygon) or multi-part geometry (MultiPoint, MultiLineString, MultiPolygon) and the geomark attribution.  The geometry and attribution can be downloaded as a spatial download file format in a supported coordinate system. The download files can then be used in a desktop GIS application (e.g. ArcMap), Google Earth or a web mapping application.
    **/
    getGeomarksGeomarkIdFeatureFileFormatExtension(req: operations.GetGeomarksGeomarkIdFeatureFileFormatExtensionRequest, config?: AxiosRequestConfig): Promise<operations.GetGeomarksGeomarkIdFeatureFileFormatExtensionResponse>;
}
