import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetIntersectionsIntersectionIdOutputFormatOutputFormatEnum {
    Json = "json",
    Geojson = "geojson",
    Xhtml = "xhtml",
    Kml = "kml",
    Gml = "gml",
    Csv = "csv",
    Shpz = "shpz"
}
export declare class GetIntersectionsIntersectionIdOutputFormatPathParams extends SpeakeasyBase {
    intersectionId: string;
    outputFormat: GetIntersectionsIntersectionIdOutputFormatOutputFormatEnum;
}
export declare class GetIntersectionsIntersectionIdOutputFormatQueryParams extends SpeakeasyBase {
    outputSrs?: number;
}
export declare class GetIntersectionsIntersectionIdOutputFormatRequest extends SpeakeasyBase {
    pathParams: GetIntersectionsIntersectionIdOutputFormatPathParams;
    queryParams: GetIntersectionsIntersectionIdOutputFormatQueryParams;
}
export declare class GetIntersectionsIntersectionIdOutputFormatResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
