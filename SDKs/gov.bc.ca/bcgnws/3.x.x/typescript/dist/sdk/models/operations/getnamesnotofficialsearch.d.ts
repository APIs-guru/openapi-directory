import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetNamesNotOfficialSearchOutputFormatEnum {
    Json = "json",
    Xml = "xml",
    Kml = "kml",
    Csv = "csv"
}
export declare enum GetNamesNotOfficialSearchOutputStyleEnum {
    Summary = "summary",
    Detail = "detail"
}
export declare enum GetNamesNotOfficialSearchSortByEnum {
    Relevance = "relevance",
    Name = "name",
    FeatureType = "featureType",
    DecisionDate = "decisionDate"
}
export declare class GetNamesNotOfficialSearchQueryParams extends SpeakeasyBase {
    embed?: number;
    exactSpelling?: number;
    featureCategory?: string;
    featureClass?: string;
    featureType?: string;
    itemsPerPage?: number;
    name: string;
    outputFormat: GetNamesNotOfficialSearchOutputFormatEnum;
    outputSrs?: number;
    outputStyle?: GetNamesNotOfficialSearchOutputStyleEnum;
    sortBy?: GetNamesNotOfficialSearchSortByEnum;
    startIndex?: number;
}
export declare class GetNamesNotOfficialSearchRequest extends SpeakeasyBase {
    queryParams: GetNamesNotOfficialSearchQueryParams;
}
export declare class GetNamesNotOfficialSearchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
