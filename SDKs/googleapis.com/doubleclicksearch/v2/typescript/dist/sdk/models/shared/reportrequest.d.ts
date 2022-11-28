import { SpeakeasyBase } from "../../../internal/utils";
import { ReportApiColumnSpec } from "./reportapicolumnspec";
export declare class ReportRequestFilters extends SpeakeasyBase {
    column?: ReportApiColumnSpec;
    operator?: string;
    values?: any[];
}
export declare class ReportRequestOrderBy extends SpeakeasyBase {
    column?: ReportApiColumnSpec;
    sortOrder?: string;
}
/**
 * The reportScope is a set of IDs that are used to determine which subset of entities will be returned in the report. The full lineage of IDs from the lowest scoped level desired up through agency is required.
**/
export declare class ReportRequestReportScope extends SpeakeasyBase {
    adGroupId?: string;
    adId?: string;
    advertiserId?: string;
    agencyId?: string;
    campaignId?: string;
    engineAccountId?: string;
    keywordId?: string;
}
/**
 * If metrics are requested in a report, this argument will be used to restrict the metrics to a specific time range.
**/
export declare class ReportRequestTimeRange extends SpeakeasyBase {
    changedAttributesSinceTimestamp?: string;
    changedMetricsSinceTimestamp?: string;
    endDate?: string;
    startDate?: string;
}
/**
 * A request object used to create a DoubleClick Search report.
**/
export declare class ReportRequest extends SpeakeasyBase {
    columns?: ReportApiColumnSpec[];
    downloadFormat?: string;
    filters?: ReportRequestFilters[];
    includeDeletedEntities?: boolean;
    includeRemovedEntities?: boolean;
    maxRowsPerFile?: number;
    orderBy?: ReportRequestOrderBy[];
    reportScope?: ReportRequestReportScope;
    reportType?: string;
    rowCount?: number;
    startRow?: number;
    statisticsCurrency?: string;
    timeRange?: ReportRequestTimeRange;
    verifySingleTimeZone?: boolean;
}
