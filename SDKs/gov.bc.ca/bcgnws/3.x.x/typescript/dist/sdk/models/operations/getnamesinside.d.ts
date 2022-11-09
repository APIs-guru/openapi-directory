import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetNamesInsideOutputFormatEnum {
    Json = "json",
    Xml = "xml",
    Kml = "kml",
    Csv = "csv"
}
export declare enum GetNamesInsideOutputStyleEnum {
    Summary = "summary",
    Detail = "detail"
}
export declare enum GetNamesInsideSortByEnum {
    Name = "name",
    FeatureType = "featureType",
    DecisionDate = "decisionDate"
}
export declare class GetNamesInsideQueryParams extends SpeakeasyBase {
    bbox: string;
    embed?: number;
    featureCategory?: string;
    featureClass?: string;
    featureType?: string;
    itemsPerPage?: number;
    outputFormat: GetNamesInsideOutputFormatEnum;
    outputSrs?: number;
    outputStyle?: GetNamesInsideOutputStyleEnum;
    sortBy?: GetNamesInsideSortByEnum;
    startIndex?: number;
}
export declare class GetNamesInsideRequest extends SpeakeasyBase {
    queryParams: GetNamesInsideQueryParams;
}
export declare class GetNamesInsideResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
