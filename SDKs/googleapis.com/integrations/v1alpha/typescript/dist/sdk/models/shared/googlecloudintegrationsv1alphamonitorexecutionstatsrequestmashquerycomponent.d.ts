import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestGroupBy } from "./googlecloudintegrationsv1alphamonitorexecutionstatsrequestgroupby";
export declare enum GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryComponentBorgTaskMetricEnum {
    BorgTaskMetricUnspecified = "BORG_TASK_METRIC_UNSPECIFIED",
    TaskIndividualCount = "TASK_INDIVIDUAL_COUNT",
    EventCount = "EVENT_COUNT",
    EventDuration = "EVENT_DURATION",
    TaskIndividualDuration = "TASK_INDIVIDUAL_DURATION"
}
/**
 * The components for constructing MashQuery.
**/
export declare class GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryComponent extends SpeakeasyBase {
    borgTaskMetric?: GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryComponentBorgTaskMetricEnum;
    dataFilters?: string[];
    fetchFilters?: string[];
    groupBy?: GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestGroupBy;
    pointOperation?: string;
    timeDelta?: string;
}
