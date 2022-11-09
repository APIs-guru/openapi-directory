import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetGeomarksGeomarkIdPointFileFormatExtensionFileFormatExtensionEnum {
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
export declare class GetGeomarksGeomarkIdPointFileFormatExtensionPathParams extends SpeakeasyBase {
    fileFormatExtension: GetGeomarksGeomarkIdPointFileFormatExtensionFileFormatExtensionEnum;
    geomarkId: string;
}
export declare class GetGeomarksGeomarkIdPointFileFormatExtensionQueryParams extends SpeakeasyBase {
    srid?: number;
}
export declare class GetGeomarksGeomarkIdPointFileFormatExtensionRequest extends SpeakeasyBase {
    pathParams: GetGeomarksGeomarkIdPointFileFormatExtensionPathParams;
    queryParams: GetGeomarksGeomarkIdPointFileFormatExtensionQueryParams;
}
export declare class GetGeomarksGeomarkIdPointFileFormatExtensionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
