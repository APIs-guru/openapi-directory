import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    /**
     * The source geomarks can be specified by with the geomarkUrl parameter.  Repeat the parameter if sourcing from multiple geomarks
    **/
    GetGeomarksGeomarkIdBoundingBoxFileFormatExtension(req: operations.GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionRequest, config?: AxiosRequestConfig): Promise<operations.GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionResponse>;
    /**
     * The geomark feature resource returns a single spatial feature with either a single (Point, LineString, Polygon) or multi-part geometry (MultiPoint, MultiLineString, MultiPolygon) and the geomark attribution.  The geometry and attribution can be downloaded as a spatial download file format in a supported coordinate system. The download files can then be used in a desktop GIS application (e.g. ArcMap), Google Earth or a web mapping application.
    **/
    GetGeomarksGeomarkIdFeatureFileFormatExtension(req: operations.GetGeomarksGeomarkIdFeatureFileFormatExtensionRequest, config?: AxiosRequestConfig): Promise<operations.GetGeomarksGeomarkIdFeatureFileFormatExtensionResponse>;
    /**
     * The attribution can be downloaded as a info file format. The download files can then be processed by a client application to access the geomark info fields and to get the URLs to the geometry download resources.
    **/
    GetGeomarksGeomarkIdFileFormatExtension(req: operations.GetGeomarksGeomarkIdFileFormatExtensionRequest, config?: AxiosRequestConfig): Promise<operations.GetGeomarksGeomarkIdFileFormatExtensionResponse>;
    /**
     * The geomark parts resource returns a one or more spatial features. One for each part of the Geomark's geomerty. Each part contains a single (Point, LineString, Polygon) geometry and the geomark attribution.
    **/
    GetGeomarksGeomarkIdPartsFileFormatExtension(req: operations.GetGeomarksGeomarkIdPartsFileFormatExtensionRequest, config?: AxiosRequestConfig): Promise<operations.GetGeomarksGeomarkIdPartsFileFormatExtensionResponse>;
    /**
     * The geomark point resource returns a single spatial feature with a single Point and the geomark attribution.  The point geometry will be created from the first geometry part of the Geomark. Point geomarks will return the first Point part in the geomark.  LineString geomarks will return the first coordinate of the first LineString part in the geomark. Polygon geomarks will return the centroid or another point inside the first Polygon part in the geomark. The geometry and attribution can be downloaded as a spatial download file format in a supported coordinate system. The download files can then be used in a desktop GIS application (e.g. ArcMap), Google Earth or a web mapping application.
    **/
    GetGeomarksGeomarkIdPointFileFormatExtension(req: operations.GetGeomarksGeomarkIdPointFileFormatExtensionRequest, config?: AxiosRequestConfig): Promise<operations.GetGeomarksGeomarkIdPointFileFormatExtensionResponse>;
    /**
     * The source geomarks can be specified by with the geomarkUrl parameter.  Repeat the parameter if sourcing from multiple geomarks
    **/
    PostGeomarksCopy(req: operations.PostGeomarksCopyRequest, config?: AxiosRequestConfig): Promise<operations.PostGeomarksCopyResponse>;
    /**
     * Create a new geomark from the geometries read from the 'body' parameter or file.
    **/
    PostGeomarksNew(req: operations.PostGeomarksNewRequest, config?: AxiosRequestConfig): Promise<operations.PostGeomarksNewResponse>;
}
export {};
