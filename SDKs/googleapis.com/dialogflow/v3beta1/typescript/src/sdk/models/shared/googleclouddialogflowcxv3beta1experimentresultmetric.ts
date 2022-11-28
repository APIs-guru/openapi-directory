import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1ExperimentResultConfidenceInterval } from "./googleclouddialogflowcxv3beta1experimentresultconfidenceinterval";


export enum GoogleCloudDialogflowCxV3beta1ExperimentResultMetricCountTypeEnum {
    CountTypeUnspecified = "COUNT_TYPE_UNSPECIFIED",
    TotalNoMatchCount = "TOTAL_NO_MATCH_COUNT",
    TotalTurnCount = "TOTAL_TURN_COUNT",
    AverageTurnCount = "AVERAGE_TURN_COUNT"
}

export enum GoogleCloudDialogflowCxV3beta1ExperimentResultMetricTypeEnum {
    MetricUnspecified = "METRIC_UNSPECIFIED",
    ContainedSessionNoCallbackRate = "CONTAINED_SESSION_NO_CALLBACK_RATE",
    LiveAgentHandoffRate = "LIVE_AGENT_HANDOFF_RATE",
    CallbackSessionRate = "CALLBACK_SESSION_RATE",
    AbandonedSessionRate = "ABANDONED_SESSION_RATE",
    SessionEndRate = "SESSION_END_RATE"
}


// GoogleCloudDialogflowCxV3beta1ExperimentResultMetric
/** 
 * Metric and corresponding confidence intervals.
**/
export class GoogleCloudDialogflowCxV3beta1ExperimentResultMetric extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=confidenceInterval" })
  confidenceInterval?: GoogleCloudDialogflowCxV3beta1ExperimentResultConfidenceInterval;

  @SpeakeasyMetadata({ data: "json, name=count" })
  count?: number;

  @SpeakeasyMetadata({ data: "json, name=countType" })
  countType?: GoogleCloudDialogflowCxV3beta1ExperimentResultMetricCountTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=ratio" })
  ratio?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GoogleCloudDialogflowCxV3beta1ExperimentResultMetricTypeEnum;
}
