import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetGeomarksGeomarkIdPartsFileFormatExtensionFileFormatExtensionEnum {
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
export declare class GetGeomarksGeomarkIdPartsFileFormatExtensionPathParams extends SpeakeasyBase {
    fileFormatExtension: GetGeomarksGeomarkIdPartsFileFormatExtensionFileFormatExtensionEnum;
    geomarkId: string;
}
export declare class GetGeomarksGeomarkIdPartsFileFormatExtensionQueryParams extends SpeakeasyBase {
    srid?: number;
}
export declare class GetGeomarksGeomarkIdPartsFileFormatExtensionRequest extends SpeakeasyBase {
    pathParams: GetGeomarksGeomarkIdPartsFileFormatExtensionPathParams;
    queryParams: GetGeomarksGeomarkIdPartsFileFormatExtensionQueryParams;
}
export declare class GetGeomarksGeomarkIdPartsFileFormatExtensionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
