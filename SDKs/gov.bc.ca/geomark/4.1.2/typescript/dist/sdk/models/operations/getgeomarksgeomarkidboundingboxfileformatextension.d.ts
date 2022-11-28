import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionFileFormatExtensionEnum {
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
export declare class GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionPathParams extends SpeakeasyBase {
    fileFormatExtension: GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionFileFormatExtensionEnum;
    geomarkId: string;
}
export declare class GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionQueryParams extends SpeakeasyBase {
    srid?: number;
}
export declare class GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionRequest extends SpeakeasyBase {
    pathParams: GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionPathParams;
    queryParams: GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionQueryParams;
}
export declare class GetGeomarksGeomarkIdBoundingBoxFileFormatExtensionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
