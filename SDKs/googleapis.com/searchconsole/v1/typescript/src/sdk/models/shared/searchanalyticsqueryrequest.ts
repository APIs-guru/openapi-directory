import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ApiDimensionFilterGroup } from "./apidimensionfiltergroup";

export enum SearchAnalyticsQueryRequestAggregationTypeEnum {
    Auto = "AUTO"
,    ByProperty = "BY_PROPERTY"
,    ByPage = "BY_PAGE"
}

export enum SearchAnalyticsQueryRequestDataStateEnum {
    DataStateUnspecified = "DATA_STATE_UNSPECIFIED"
,    Final = "FINAL"
,    All = "ALL"
}

export enum SearchAnalyticsQueryRequestDimensionsEnum {
    Date = "DATE"
,    Query = "QUERY"
,    Page = "PAGE"
,    Country = "COUNTRY"
,    Device = "DEVICE"
,    SearchAppearance = "SEARCH_APPEARANCE"
}

export enum SearchAnalyticsQueryRequestSearchTypeEnum {
    Web = "WEB"
,    Image = "IMAGE"
,    Video = "VIDEO"
,    News = "NEWS"
,    Discover = "DISCOVER"
,    GoogleNews = "GOOGLE_NEWS"
}

export enum SearchAnalyticsQueryRequestTypeEnum {
    Web = "WEB"
,    Image = "IMAGE"
,    Video = "VIDEO"
,    News = "NEWS"
,    Discover = "DISCOVER"
,    GoogleNews = "GOOGLE_NEWS"
}


export class SearchAnalyticsQueryRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=aggregationType" })
  aggregationType?: SearchAnalyticsQueryRequestAggregationTypeEnum;

  @Metadata({ data: "json, name=dataState" })
  dataState?: SearchAnalyticsQueryRequestDataStateEnum;

  @Metadata({ data: "json, name=dimensionFilterGroups", elemType: shared.ApiDimensionFilterGroup })
  dimensionFilterGroups?: ApiDimensionFilterGroup[];

  @Metadata({ data: "json, name=dimensions" })
  dimensions?: SearchAnalyticsQueryRequestDimensionsEnum[];

  @Metadata({ data: "json, name=endDate" })
  endDate?: string;

  @Metadata({ data: "json, name=rowLimit" })
  rowLimit?: number;

  @Metadata({ data: "json, name=searchType" })
  searchType?: SearchAnalyticsQueryRequestSearchTypeEnum;

  @Metadata({ data: "json, name=startDate" })
  startDate?: string;

  @Metadata({ data: "json, name=startRow" })
  startRow?: number;

  @Metadata({ data: "json, name=type" })
  type?: SearchAnalyticsQueryRequestTypeEnum;
}
