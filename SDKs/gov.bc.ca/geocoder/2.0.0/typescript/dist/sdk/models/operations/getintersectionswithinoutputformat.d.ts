import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetIntersectionsWithinOutputFormatOutputFormatEnum {
    Json = "json",
    Geojson = "geojson",
    Xhtml = "xhtml",
    Kml = "kml",
    Gml = "gml",
    Csv = "csv",
    Shpz = "shpz"
}
export declare class GetIntersectionsWithinOutputFormatPathParams extends SpeakeasyBase {
    outputFormat: GetIntersectionsWithinOutputFormatOutputFormatEnum;
}
export declare class GetIntersectionsWithinOutputFormatQueryParams extends SpeakeasyBase {
    bbox: string;
    maxDegree?: number;
    maxResults?: number;
    minDegree?: number;
    outputSrs?: number;
}
export declare class GetIntersectionsWithinOutputFormatRequest extends SpeakeasyBase {
    pathParams: GetIntersectionsWithinOutputFormatPathParams;
    queryParams: GetIntersectionsWithinOutputFormatQueryParams;
}
export declare class GetIntersectionsWithinOutputFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
