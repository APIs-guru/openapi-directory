import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ReportApiColumnSpec } from "./reportapicolumnspec";



export class ReportRequestFilters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=column" })
  column?: ReportApiColumnSpec;

  @SpeakeasyMetadata({ data: "json, name=operator" })
  operator?: string;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: any[];
}


export class ReportRequestOrderBy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=column" })
  column?: ReportApiColumnSpec;

  @SpeakeasyMetadata({ data: "json, name=sortOrder" })
  sortOrder?: string;
}


// ReportRequestReportScope
/** 
 * The reportScope is a set of IDs that are used to determine which subset of entities will be returned in the report. The full lineage of IDs from the lowest scoped level desired up through agency is required.
**/
export class ReportRequestReportScope extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=adGroupId" })
  adGroupId?: string;

  @SpeakeasyMetadata({ data: "json, name=adId" })
  adId?: string;

  @SpeakeasyMetadata({ data: "json, name=advertiserId" })
  advertiserId?: string;

  @SpeakeasyMetadata({ data: "json, name=agencyId" })
  agencyId?: string;

  @SpeakeasyMetadata({ data: "json, name=campaignId" })
  campaignId?: string;

  @SpeakeasyMetadata({ data: "json, name=engineAccountId" })
  engineAccountId?: string;

  @SpeakeasyMetadata({ data: "json, name=keywordId" })
  keywordId?: string;
}


// ReportRequestTimeRange
/** 
 * If metrics are requested in a report, this argument will be used to restrict the metrics to a specific time range.
**/
export class ReportRequestTimeRange extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=changedAttributesSinceTimestamp" })
  changedAttributesSinceTimestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=changedMetricsSinceTimestamp" })
  changedMetricsSinceTimestamp?: string;

  @SpeakeasyMetadata({ data: "json, name=endDate" })
  endDate?: string;

  @SpeakeasyMetadata({ data: "json, name=startDate" })
  startDate?: string;
}


// ReportRequest
/** 
 * A request object used to create a DoubleClick Search report.
**/
export class ReportRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=columns", elemType: ReportApiColumnSpec })
  columns?: ReportApiColumnSpec[];

  @SpeakeasyMetadata({ data: "json, name=downloadFormat" })
  downloadFormat?: string;

  @SpeakeasyMetadata({ data: "json, name=filters", elemType: ReportRequestFilters })
  filters?: ReportRequestFilters[];

  @SpeakeasyMetadata({ data: "json, name=includeDeletedEntities" })
  includeDeletedEntities?: boolean;

  @SpeakeasyMetadata({ data: "json, name=includeRemovedEntities" })
  includeRemovedEntities?: boolean;

  @SpeakeasyMetadata({ data: "json, name=maxRowsPerFile" })
  maxRowsPerFile?: number;

  @SpeakeasyMetadata({ data: "json, name=orderBy", elemType: ReportRequestOrderBy })
  orderBy?: ReportRequestOrderBy[];

  @SpeakeasyMetadata({ data: "json, name=reportScope" })
  reportScope?: ReportRequestReportScope;

  @SpeakeasyMetadata({ data: "json, name=reportType" })
  reportType?: string;

  @SpeakeasyMetadata({ data: "json, name=rowCount" })
  rowCount?: number;

  @SpeakeasyMetadata({ data: "json, name=startRow" })
  startRow?: number;

  @SpeakeasyMetadata({ data: "json, name=statisticsCurrency" })
  statisticsCurrency?: string;

  @SpeakeasyMetadata({ data: "json, name=timeRange" })
  timeRange?: ReportRequestTimeRange;

  @SpeakeasyMetadata({ data: "json, name=verifySingleTimeZone" })
  verifySingleTimeZone?: boolean;
}
