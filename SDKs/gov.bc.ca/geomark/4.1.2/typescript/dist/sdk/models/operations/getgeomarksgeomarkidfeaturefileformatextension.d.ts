import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetGeomarksGeomarkIdFeatureFileFormatExtensionFileFormatExtensionEnum {
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
export declare class GetGeomarksGeomarkIdFeatureFileFormatExtensionPathParams extends SpeakeasyBase {
    fileFormatExtension: GetGeomarksGeomarkIdFeatureFileFormatExtensionFileFormatExtensionEnum;
    geomarkId: string;
}
export declare class GetGeomarksGeomarkIdFeatureFileFormatExtensionQueryParams extends SpeakeasyBase {
    srid?: number;
}
export declare class GetGeomarksGeomarkIdFeatureFileFormatExtensionRequest extends SpeakeasyBase {
    pathParams: GetGeomarksGeomarkIdFeatureFileFormatExtensionPathParams;
    queryParams: GetGeomarksGeomarkIdFeatureFileFormatExtensionQueryParams;
}
export declare class GetGeomarksGeomarkIdFeatureFileFormatExtensionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
