import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ReportApiColumnSpec } from "./reportapicolumnspec";
import { ReportApiColumnSpec } from "./reportapicolumnspec";
import { ReportApiColumnSpec } from "./reportapicolumnspec";


export class ReportRequestFilters extends SpeakeasyBase {
  @Metadata({ data: "json, name=column" })
  column?: ReportApiColumnSpec;

  @Metadata({ data: "json, name=operator" })
  operator?: string;

  @Metadata({ data: "json, name=values" })
  values?: any[];
}


export class ReportRequestOrderBy extends SpeakeasyBase {
  @Metadata({ data: "json, name=column" })
  column?: ReportApiColumnSpec;

  @Metadata({ data: "json, name=sortOrder" })
  sortOrder?: string;
}


// ReportRequestReportScope
/** 
 * The reportScope is a set of IDs that are used to determine which subset of entities will be returned in the report. The full lineage of IDs from the lowest scoped level desired up through agency is required.
**/
export class ReportRequestReportScope extends SpeakeasyBase {
  @Metadata({ data: "json, name=adGroupId" })
  adGroupId?: string;

  @Metadata({ data: "json, name=adId" })
  adId?: string;

  @Metadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @Metadata({ data: "json, name=agencyId" })
  agencyId?: string;

  @Metadata({ data: "json, name=campaignId" })
  campaignId?: string;

  @Metadata({ data: "json, name=engineAccountId" })
  engineAccountId?: string;

  @Metadata({ data: "json, name=keywordId" })
  keywordId?: string;
}


// ReportRequestTimeRange
/** 
 * If metrics are requested in a report, this argument will be used to restrict the metrics to a specific time range.
**/
export class ReportRequestTimeRange extends SpeakeasyBase {
  @Metadata({ data: "json, name=changedAttributesSinceTimestamp" })
  changedAttributesSinceTimestamp?: string;

  @Metadata({ data: "json, name=changedMetricsSinceTimestamp" })
  changedMetricsSinceTimestamp?: string;

  @Metadata({ data: "json, name=endDate" })
  endDate?: string;

  @Metadata({ data: "json, name=startDate" })
  startDate?: string;
}


// ReportRequest
/** 
 * A request object used to create a DoubleClick Search report.
**/
export class ReportRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=columns", elemType: shared.ReportApiColumnSpec })
  columns?: ReportApiColumnSpec[];

  @Metadata({ data: "json, name=downloadFormat" })
  downloadFormat?: string;

  @Metadata({ data: "json, name=filters", elemType: shared.ReportRequestFilters })
  filters?: ReportRequestFilters[];

  @Metadata({ data: "json, name=includeDeletedEntities" })
  includeDeletedEntities?: boolean;

  @Metadata({ data: "json, name=includeRemovedEntities" })
  includeRemovedEntities?: boolean;

  @Metadata({ data: "json, name=maxRowsPerFile" })
  maxRowsPerFile?: number;

  @Metadata({ data: "json, name=orderBy", elemType: shared.ReportRequestOrderBy })
  orderBy?: ReportRequestOrderBy[];

  @Metadata({ data: "json, name=reportScope" })
  reportScope?: ReportRequestReportScope;

  @Metadata({ data: "json, name=reportType" })
  reportType?: string;

  @Metadata({ data: "json, name=rowCount" })
  rowCount?: number;

  @Metadata({ data: "json, name=startRow" })
  startRow?: number;

  @Metadata({ data: "json, name=statisticsCurrency" })
  statisticsCurrency?: string;

  @Metadata({ data: "json, name=timeRange" })
  timeRange?: ReportRequestTimeRange;

  @Metadata({ data: "json, name=verifySingleTimeZone" })
  verifySingleTimeZone?: boolean;
}
