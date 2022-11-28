import { SpeakeasyBase } from "../../../internal/utils";
export declare enum GetNamesSearchOutputFormatEnum {
    Json = "json",
    Xml = "xml",
    Kml = "kml",
    Csv = "csv"
}
export declare enum GetNamesSearchOutputStyleEnum {
    Summary = "summary",
    Detail = "detail"
}
export declare enum GetNamesSearchSortByEnum {
    Relevance = "relevance",
    Name = "name",
    FeatureType = "featureType",
    DecisionDate = "decisionDate"
}
export declare class GetNamesSearchQueryParams extends SpeakeasyBase {
    embed?: number;
    exactSpelling?: number;
    featureCategory?: string;
    featureClass?: string;
    featureType?: string;
    itemsPerPage?: number;
    name: string;
    outputFormat: GetNamesSearchOutputFormatEnum;
    outputSrs?: number;
    outputStyle?: GetNamesSearchOutputStyleEnum;
    sortBy?: GetNamesSearchSortByEnum;
    startIndex?: number;
}
export declare class GetNamesSearchRequest extends SpeakeasyBase {
    queryParams: GetNamesSearchQueryParams;
}
export declare class GetNamesSearchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
