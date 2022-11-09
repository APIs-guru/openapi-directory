import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetIntersectionsNearestOutputFormatOutputFormatEnum {
    Json = "json",
    Geojson = "geojson",
    Xhtml = "xhtml",
    Kml = "kml",
    Gml = "gml",
    Csv = "csv",
    Shpz = "shpz"
}
export declare class GetIntersectionsNearestOutputFormatPathParams extends SpeakeasyBase {
    outputFormat: GetIntersectionsNearestOutputFormatOutputFormatEnum;
}
export declare class GetIntersectionsNearestOutputFormatQueryParams extends SpeakeasyBase {
    maxDegree?: number;
    maxDistance?: number;
    minDegree?: number;
    outputSrs?: number;
    point: string;
}
export declare class GetIntersectionsNearestOutputFormatRequest extends SpeakeasyBase {
    pathParams: GetIntersectionsNearestOutputFormatPathParams;
    queryParams: GetIntersectionsNearestOutputFormatQueryParams;
}
export declare class GetIntersectionsNearestOutputFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
