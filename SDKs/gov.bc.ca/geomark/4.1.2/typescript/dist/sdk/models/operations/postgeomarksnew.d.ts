import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostGeomarksNewRequestBodyBufferCapEnum {
    Round = "ROUND",
    Square = "SQUARE",
    Flat = "FLAT"
}
export declare enum PostGeomarksNewRequestBodyBufferJoinEnum {
    Round = "ROUND",
    Mitre = "MITRE",
    Bevel = "BEVEL"
}
export declare enum PostGeomarksNewRequestBodyFormatEnum {
    Json = "json",
    Xml = "xml",
    Kml = "kml",
    Kmz = "kmz",
    Shp = "shp",
    Shpz = "shpz",
    Geojson = "geojson",
    Gml = "gml",
    Wkt = "wkt"
}
export declare enum PostGeomarksNewRequestBodyResultFormatEnum {
    Json = "json",
    Xml = "xml",
    Kml = "kml",
    Kmz = "kmz",
    Shp = "shp",
    Shpz = "shpz",
    Geojson = "geojson",
    Gml = "gml",
    Wkt = "wkt"
}
export declare class PostGeomarksNewRequestBody extends SpeakeasyBase {
    allowOverlap?: boolean;
    body?: string;
    bufferCap?: PostGeomarksNewRequestBodyBufferCapEnum;
    bufferJoin?: PostGeomarksNewRequestBodyBufferJoinEnum;
    bufferMetres?: number;
    bufferMitreLimit?: number;
    bufferSegments?: number;
    callback?: string;
    failureRedirectUrl?: string;
    format?: PostGeomarksNewRequestBodyFormatEnum;
    multiple?: boolean;
    redirectUrl?: string;
    resultFormat?: PostGeomarksNewRequestBodyResultFormatEnum;
    srid?: number;
}
export declare class PostGeomarksNewRequest extends SpeakeasyBase {
    request?: PostGeomarksNewRequestBody;
}
export declare class PostGeomarksNewResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
