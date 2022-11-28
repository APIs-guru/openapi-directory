import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDialogflowCxV3beta1ExperimentResultConfidenceInterval } from "./googleclouddialogflowcxv3beta1experimentresultconfidenceinterval";
export declare enum GoogleCloudDialogflowCxV3beta1ExperimentResultMetricCountTypeEnum {
    CountTypeUnspecified = "COUNT_TYPE_UNSPECIFIED",
    TotalNoMatchCount = "TOTAL_NO_MATCH_COUNT",
    TotalTurnCount = "TOTAL_TURN_COUNT",
    AverageTurnCount = "AVERAGE_TURN_COUNT"
}
export declare enum GoogleCloudDialogflowCxV3beta1ExperimentResultMetricTypeEnum {
    MetricUnspecified = "METRIC_UNSPECIFIED",
    ContainedSessionNoCallbackRate = "CONTAINED_SESSION_NO_CALLBACK_RATE",
    LiveAgentHandoffRate = "LIVE_AGENT_HANDOFF_RATE",
    CallbackSessionRate = "CALLBACK_SESSION_RATE",
    AbandonedSessionRate = "ABANDONED_SESSION_RATE",
    SessionEndRate = "SESSION_END_RATE"
}
/**
 * Metric and corresponding confidence intervals.
**/
export declare class GoogleCloudDialogflowCxV3beta1ExperimentResultMetric extends SpeakeasyBase {
    confidenceInterval?: GoogleCloudDialogflowCxV3beta1ExperimentResultConfidenceInterval;
    count?: number;
    countType?: GoogleCloudDialogflowCxV3beta1ExperimentResultMetricCountTypeEnum;
    ratio?: number;
    type?: GoogleCloudDialogflowCxV3beta1ExperimentResultMetricTypeEnum;
}
