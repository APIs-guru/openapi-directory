import { SpeakeasyBase } from "../../../internal/utils";
import { ApiDimensionFilterGroup } from "./apidimensionfiltergroup";
export declare enum SearchAnalyticsQueryRequestAggregationTypeEnum {
    Auto = "AUTO",
    ByProperty = "BY_PROPERTY",
    ByPage = "BY_PAGE"
}
export declare enum SearchAnalyticsQueryRequestDataStateEnum {
    DataStateUnspecified = "DATA_STATE_UNSPECIFIED",
    Final = "FINAL",
    All = "ALL"
}
export declare enum SearchAnalyticsQueryRequestDimensionsEnum {
    Date = "DATE",
    Query = "QUERY",
    Page = "PAGE",
    Country = "COUNTRY",
    Device = "DEVICE",
    SearchAppearance = "SEARCH_APPEARANCE"
}
export declare enum SearchAnalyticsQueryRequestSearchTypeEnum {
    Web = "WEB",
    Image = "IMAGE",
    Video = "VIDEO",
    News = "NEWS",
    Discover = "DISCOVER",
    GoogleNews = "GOOGLE_NEWS"
}
export declare enum SearchAnalyticsQueryRequestTypeEnum {
    Web = "WEB",
    Image = "IMAGE",
    Video = "VIDEO",
    News = "NEWS",
    Discover = "DISCOVER",
    GoogleNews = "GOOGLE_NEWS"
}
export declare class SearchAnalyticsQueryRequest extends SpeakeasyBase {
    aggregationType?: SearchAnalyticsQueryRequestAggregationTypeEnum;
    dataState?: SearchAnalyticsQueryRequestDataStateEnum;
    dimensionFilterGroups?: ApiDimensionFilterGroup[];
    dimensions?: SearchAnalyticsQueryRequestDimensionsEnum[];
    endDate?: string;
    rowLimit?: number;
    searchType?: SearchAnalyticsQueryRequestSearchTypeEnum;
    startDate?: string;
    startRow?: number;
    type?: SearchAnalyticsQueryRequestTypeEnum;
}
