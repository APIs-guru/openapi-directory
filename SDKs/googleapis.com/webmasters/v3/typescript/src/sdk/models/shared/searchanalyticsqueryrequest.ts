import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ApiDimensionFilterGroup } from "./apidimensionfiltergroup";



export class SearchAnalyticsQueryRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=aggregationType" })
  aggregationType?: string;

  @SpeakeasyMetadata({ data: "json, name=dataState" })
  dataState?: string;

  @SpeakeasyMetadata({ data: "json, name=dimensionFilterGroups", elemType: ApiDimensionFilterGroup })
  dimensionFilterGroups?: ApiDimensionFilterGroup[];

  @SpeakeasyMetadata({ data: "json, name=dimensions" })
  dimensions?: string[];

  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "json, name=rowLimit" })
  rowLimit?: number;

  @SpeakeasyMetadata({ data: "json, name=searchType" })
  searchType?: string;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: string;

  @SpeakeasyMetadata({ data: "json, name=startRow" })
  startRow?: number;
}
