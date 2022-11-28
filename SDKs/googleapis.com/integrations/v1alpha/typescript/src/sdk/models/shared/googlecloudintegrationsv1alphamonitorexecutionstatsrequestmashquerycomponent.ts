import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestGroupBy } from "./googlecloudintegrationsv1alphamonitorexecutionstatsrequestgroupby";


export enum GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryComponentBorgTaskMetricEnum {
    BorgTaskMetricUnspecified = "BORG_TASK_METRIC_UNSPECIFIED",
    TaskIndividualCount = "TASK_INDIVIDUAL_COUNT",
    EventCount = "EVENT_COUNT",
    EventDuration = "EVENT_DURATION",
    TaskIndividualDuration = "TASK_INDIVIDUAL_DURATION"
}


// GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryComponent
/** 
 * The components for constructing MashQuery.
**/
export class GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryComponent extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=borgTaskMetric" })
  borgTaskMetric?: GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryComponentBorgTaskMetricEnum;

  @SpeakeasyMetadata({ data: "json, name=dataFilters" })
  dataFilters?: string[];

  @SpeakeasyMetadata({ data: "json, name=fetchFilters" })
  fetchFilters?: string[];

  @SpeakeasyMetadata({ data: "json, name=groupBy" })
  groupBy?: GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestGroupBy;

  @SpeakeasyMetadata({ data: "json, name=pointOperation" })
  pointOperation?: string;

  @SpeakeasyMetadata({ data: "json, name=timeDelta" })
  timeDelta?: string;
}
