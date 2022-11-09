import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestGroupBy } from "./googlecloudintegrationsv1alphamonitorexecutionstatsrequestgroupby";

export enum GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryComponentBorgTaskMetricEnum {
    BorgTaskMetricUnspecified = "BORG_TASK_METRIC_UNSPECIFIED"
,    TaskIndividualCount = "TASK_INDIVIDUAL_COUNT"
,    EventCount = "EVENT_COUNT"
,    EventDuration = "EVENT_DURATION"
,    TaskIndividualDuration = "TASK_INDIVIDUAL_DURATION"
}


// GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryComponent
/** 
 * The components for constructing MashQuery.
**/
export class GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryComponent extends SpeakeasyBase {
  @Metadata({ data: "json, name=borgTaskMetric" })
  borgTaskMetric?: GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryComponentBorgTaskMetricEnum;

  @Metadata({ data: "json, name=dataFilters" })
  dataFilters?: string[];

  @Metadata({ data: "json, name=fetchFilters" })
  fetchFilters?: string[];

  @Metadata({ data: "json, name=groupBy" })
  groupBy?: GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestGroupBy;

  @Metadata({ data: "json, name=pointOperation" })
  pointOperation?: string;

  @Metadata({ data: "json, name=timeDelta" })
  timeDelta?: string;
}
