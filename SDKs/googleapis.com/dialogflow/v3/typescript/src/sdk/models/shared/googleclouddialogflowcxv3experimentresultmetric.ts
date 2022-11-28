import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3ExperimentResultConfidenceInterval } from "./googleclouddialogflowcxv3experimentresultconfidenceinterval";


export enum GoogleCloudDialogflowCxV3ExperimentResultMetricCountTypeEnum {
    CountTypeUnspecified = "COUNT_TYPE_UNSPECIFIED",
    TotalNoMatchCount = "TOTAL_NO_MATCH_COUNT",
    TotalTurnCount = "TOTAL_TURN_COUNT",
    AverageTurnCount = "AVERAGE_TURN_COUNT"
}

export enum GoogleCloudDialogflowCxV3ExperimentResultMetricTypeEnum {
    MetricUnspecified = "METRIC_UNSPECIFIED",
    ContainedSessionNoCallbackRate = "CONTAINED_SESSION_NO_CALLBACK_RATE",
    LiveAgentHandoffRate = "LIVE_AGENT_HANDOFF_RATE",
    CallbackSessionRate = "CALLBACK_SESSION_RATE",
    AbandonedSessionRate = "ABANDONED_SESSION_RATE",
    SessionEndRate = "SESSION_END_RATE"
}


// GoogleCloudDialogflowCxV3ExperimentResultMetric
/** 
 * Metric and corresponding confidence intervals.
**/
export class GoogleCloudDialogflowCxV3ExperimentResultMetric extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=confidenceInterval" })
  confidenceInterval?: GoogleCloudDialogflowCxV3ExperimentResultConfidenceInterval;

  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=countType" })
  countType?: GoogleCloudDialogflowCxV3ExperimentResultMetricCountTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ratio" })
  ratio?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GoogleCloudDialogflowCxV3ExperimentResultMetricTypeEnum;
}
