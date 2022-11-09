import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ApiDimensionFilterGroup } from "./apidimensionfiltergroup";


export class SearchAnalyticsQueryRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=aggregationType" })
  aggregationType?: string;

  @Metadata({ data: "json, name=dataState" })
  dataState?: string;

  @Metadata({ data: "json, name=dimensionFilterGroups", elemType: shared.ApiDimensionFilterGroup })
  dimensionFilterGroups?: ApiDimensionFilterGroup[];

  @Metadata({ data: "json, name=dimensions" })
  dimensions?: string[];

  @Metadata({ data: "json, name=endDate" })
  endDate?: string;

  @Metadata({ data: "json, name=rowLimit" })
  rowLimit?: number;

  @Metadata({ data: "json, name=searchType" })
  searchType?: string;

  @Metadata({ data: "json, name=startDate" })
  startDate?: string;

  @Metadata({ data: "json, name=startRow" })
  startRow?: number;
}
