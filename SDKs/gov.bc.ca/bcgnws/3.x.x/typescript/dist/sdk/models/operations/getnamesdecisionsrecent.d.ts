import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetNamesDecisionsRecentOutputFormatEnum {
    Json = "json",
    Xml = "xml",
    Kml = "kml",
    Csv = "csv"
}
export declare enum GetNamesDecisionsRecentOutputStyleEnum {
    Summary = "summary",
    Detail = "detail"
}
export declare enum GetNamesDecisionsRecentSortByEnum {
    Name = "name",
    FeatureType = "featureType",
    DecisionDate = "decisionDate"
}
export declare class GetNamesDecisionsRecentQueryParams extends SpeakeasyBase {
    days: number;
    embed?: number;
    featureCategory?: string;
    featureClass?: string;
    featureType?: string;
    itemsPerPage?: number;
    outputFormat: GetNamesDecisionsRecentOutputFormatEnum;
    outputSrs?: number;
    outputStyle?: GetNamesDecisionsRecentOutputStyleEnum;
    sortBy?: GetNamesDecisionsRecentSortByEnum;
    startIndex?: number;
}
export declare class GetNamesDecisionsRecentRequest extends SpeakeasyBase {
    queryParams: GetNamesDecisionsRecentQueryParams;
}
export declare class GetNamesDecisionsRecentResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
