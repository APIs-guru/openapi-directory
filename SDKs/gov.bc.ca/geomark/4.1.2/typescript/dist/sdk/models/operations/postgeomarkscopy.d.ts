import { SpeakeasyBase } from "../../../internal/utils";
export declare enum PostGeomarksCopyBufferCapEnum {
    Round = "ROUND",
    Square = "SQUARE",
    Flat = "FLAT"
}
export declare enum PostGeomarksCopyBufferJoinEnum {
    Round = "ROUND",
    Mitre = "MITRE",
    Bevel = "BEVEL"
}
export declare enum PostGeomarksCopyResultFormatEnum {
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
export declare class PostGeomarksCopyQueryParams extends SpeakeasyBase {
    allowOverlap?: boolean;
    bufferCap?: PostGeomarksCopyBufferCapEnum;
    bufferJoin?: PostGeomarksCopyBufferJoinEnum;
    bufferMetres?: number;
    bufferMitreLimit?: number;
    bufferSegments?: number;
    callback?: string;
    failureRedirectUrl?: string;
    geomarkUrl: string;
    redirectUrl?: string;
    resultFormat?: PostGeomarksCopyResultFormatEnum;
}
export declare class PostGeomarksCopyRequest extends SpeakeasyBase {
    queryParams: PostGeomarksCopyQueryParams;
}
export declare class PostGeomarksCopyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
