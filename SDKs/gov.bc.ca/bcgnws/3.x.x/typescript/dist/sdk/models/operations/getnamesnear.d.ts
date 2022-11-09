import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetNamesNearOutputFormatEnum {
    Json = "json",
    Xml = "xml",
    Kml = "kml",
    Csv = "csv"
}
export declare enum GetNamesNearOutputStyleEnum {
    Summary = "summary",
    Detail = "detail"
}
export declare enum GetNamesNearSortByEnum {
    Name = "name",
    FeatureType = "featureType",
    DecisionDate = "decisionDate"
}
export declare class GetNamesNearQueryParams extends SpeakeasyBase {
    distance: string;
    embed?: number;
    featureCategory?: string;
    featureClass?: string;
    featurePoint: string;
    featureType?: string;
    itemsPerPage?: number;
    outputFormat: GetNamesNearOutputFormatEnum;
    outputSrs?: number;
    outputStyle?: GetNamesNearOutputStyleEnum;
    sortBy?: GetNamesNearSortByEnum;
    startIndex?: number;
}
export declare class GetNamesNearRequest extends SpeakeasyBase {
    queryParams: GetNamesNearQueryParams;
}
export declare class GetNamesNearResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
