import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetIntersectionsNearOutputFormatOutputFormatEnum {
    Json = "json",
    Geojson = "geojson",
    Xhtml = "xhtml",
    Kml = "kml",
    Gml = "gml",
    Csv = "csv",
    Shpz = "shpz"
}
export declare class GetIntersectionsNearOutputFormatPathParams extends SpeakeasyBase {
    outputFormat: GetIntersectionsNearOutputFormatOutputFormatEnum;
}
export declare class GetIntersectionsNearOutputFormatQueryParams extends SpeakeasyBase {
    maxDegree?: number;
    maxDistance?: number;
    maxResults?: number;
    minDegree?: number;
    outputSrs: number;
    point: string;
}
export declare class GetIntersectionsNearOutputFormatRequest extends SpeakeasyBase {
    pathParams: GetIntersectionsNearOutputFormatPathParams;
    queryParams: GetIntersectionsNearOutputFormatQueryParams;
}
export declare class GetIntersectionsNearOutputFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
