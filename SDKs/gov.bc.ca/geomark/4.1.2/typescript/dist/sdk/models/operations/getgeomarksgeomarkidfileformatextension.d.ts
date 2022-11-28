import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetGeomarksGeomarkIdFileFormatExtensionFileFormatExtensionEnum {
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
export declare class GetGeomarksGeomarkIdFileFormatExtensionPathParams extends SpeakeasyBase {
    fileFormatExtension: GetGeomarksGeomarkIdFileFormatExtensionFileFormatExtensionEnum;
    geomarkId: string;
}
export declare class GetGeomarksGeomarkIdFileFormatExtensionQueryParams extends SpeakeasyBase {
    srid?: number;
}
export declare class GetGeomarksGeomarkIdFileFormatExtensionRequest extends SpeakeasyBase {
    pathParams: GetGeomarksGeomarkIdFileFormatExtensionPathParams;
    queryParams: GetGeomarksGeomarkIdFileFormatExtensionQueryParams;
}
export declare class GetGeomarksGeomarkIdFileFormatExtensionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
