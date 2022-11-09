import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GetNamesChangesOutputFormatEnum {
    Json = "json",
    Xml = "xml",
    Kml = "kml",
    Csv = "csv"
}
export declare enum GetNamesChangesOutputStyleEnum {
    Summary = "summary",
    Detail = "detail"
}
export declare enum GetNamesChangesSortByEnum {
    Name = "name",
    FeatureType = "featureType",
    DecisionDate = "decisionDate"
}
export declare class GetNamesChangesQueryParams extends SpeakeasyBase {
    embed?: number;
    featureCategory?: string;
    featureClass?: string;
    featureType?: string;
    fromDate: number;
    itemsPerPage?: number;
    outputFormat: GetNamesChangesOutputFormatEnum;
    outputSrs?: number;
    outputStyle?: GetNamesChangesOutputStyleEnum;
    sortBy?: GetNamesChangesSortByEnum;
    startIndex?: number;
    toDate: number;
}
export declare class GetNamesChangesRequest extends SpeakeasyBase {
    queryParams: GetNamesChangesQueryParams;
}
export declare class GetNamesChangesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
