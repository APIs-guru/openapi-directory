import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetNamesOfficialSearchOutputFormatEnum {
    Json = "json",
    Xml = "xml",
    Kml = "kml",
    Csv = "csv"
}
export declare enum GetNamesOfficialSearchOutputStyleEnum {
    Summary = "summary",
    Detail = "detail"
}
export declare enum GetNamesOfficialSearchSortByEnum {
    Relevance = "relevance",
    Name = "name",
    FeatureType = "featureType",
    DecisionDate = "decisionDate"
}
export declare class GetNamesOfficialSearchQueryParams extends SpeakeasyBase {
    embed?: number;
    exactSpelling?: number;
    featureCategory?: string;
    featureClass?: string;
    featureType?: string;
    itemsPerPage?: number;
    name: string;
    outputFormat: GetNamesOfficialSearchOutputFormatEnum;
    outputSrs?: number;
    outputStyle?: GetNamesOfficialSearchOutputStyleEnum;
    sortBy?: GetNamesOfficialSearchSortByEnum;
    startIndex?: number;
}
export declare class GetNamesOfficialSearchRequest extends SpeakeasyBase {
    queryParams: GetNamesOfficialSearchQueryParams;
}
export declare class GetNamesOfficialSearchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
