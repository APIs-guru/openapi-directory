import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApiDimensionFilterGroup } from "./apidimensionfiltergroup";


export enum SearchAnalyticsQueryRequestAggregationTypeEnum {
    Auto = "AUTO",
    ByProperty = "BY_PROPERTY",
    ByPage = "BY_PAGE"
}

export enum SearchAnalyticsQueryRequestDataStateEnum {
    DataStateUnspecified = "DATA_STATE_UNSPECIFIED",
    Final = "FINAL",
    All = "ALL"
}

export enum SearchAnalyticsQueryRequestDimensionsEnum {
    Date = "DATE",
    Query = "QUERY",
    Page = "PAGE",
    Country = "COUNTRY",
    Device = "DEVICE",
    SearchAppearance = "SEARCH_APPEARANCE"
}

export enum SearchAnalyticsQueryRequestSearchTypeEnum {
    Web = "WEB",
    Image = "IMAGE",
    Video = "VIDEO",
    News = "NEWS",
    Discover = "DISCOVER",
    GoogleNews = "GOOGLE_NEWS"
}

export enum SearchAnalyticsQueryRequestTypeEnum {
    Web = "WEB",
    Image = "IMAGE",
    Video = "VIDEO",
    News = "NEWS",
    Discover = "DISCOVER",
    GoogleNews = "GOOGLE_NEWS"
}


export class SearchAnalyticsQueryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aggregationType" })
  aggregationType?: SearchAnalyticsQueryRequestAggregationTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=dataState" })
  dataState?: SearchAnalyticsQueryRequestDataStateEnum;

  @SpeakeasyMetadata({ data: "json, name=dimensionFilterGroups", elemType: ApiDimensionFilterGroup })
  dimensionFilterGroups?: ApiDimensionFilterGroup[];

  @SpeakeasyMetadata({ data: "json, name=dimensions" })
  dimensions?: SearchAnalyticsQueryRequestDimensionsEnum[];

  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "json, name=rowLimit" })
  rowLimit?: number;

  @SpeakeasyMetadata({ data: "json, name=searchType" })
  searchType?: SearchAnalyticsQueryRequestSearchTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: string;

  @SpeakeasyMetadata({ data: "json, name=startRow" })
  startRow?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: SearchAnalyticsQueryRequestTypeEnum;
}
