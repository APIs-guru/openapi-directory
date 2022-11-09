import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetNamesDecisionsYearOutputFormatEnum {
    Json = "json",
    Xml = "xml",
    Kml = "kml",
    Csv = "csv"
}
export declare enum GetNamesDecisionsYearOutputStyleEnum {
    Summary = "summary",
    Detail = "detail"
}
export declare enum GetNamesDecisionsYearSortByEnum {
    Name = "name",
    FeatureType = "featureType",
    DecisionDate = "decisionDate"
}
export declare class GetNamesDecisionsYearQueryParams extends SpeakeasyBase {
    embed?: number;
    featureCategory?: string;
    featureClass?: string;
    featureType?: string;
    itemsPerPage?: number;
    outputFormat: GetNamesDecisionsYearOutputFormatEnum;
    outputSrs?: number;
    outputStyle?: GetNamesDecisionsYearOutputStyleEnum;
    sortBy?: GetNamesDecisionsYearSortByEnum;
    startIndex?: number;
    year: number;
}
export declare class GetNamesDecisionsYearRequest extends SpeakeasyBase {
    queryParams: GetNamesDecisionsYearQueryParams;
}
export declare class GetNamesDecisionsYearResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
