package shared

type GoogleCloudDialogflowCxV3beta1ExperimentResultMetricCountTypeEnum string

const (
	GoogleCloudDialogflowCxV3beta1ExperimentResultMetricCountTypeEnumCountTypeUnspecified GoogleCloudDialogflowCxV3beta1ExperimentResultMetricCountTypeEnum = "COUNT_TYPE_UNSPECIFIED"
	GoogleCloudDialogflowCxV3beta1ExperimentResultMetricCountTypeEnumTotalNoMatchCount    GoogleCloudDialogflowCxV3beta1ExperimentResultMetricCountTypeEnum = "TOTAL_NO_MATCH_COUNT"
	GoogleCloudDialogflowCxV3beta1ExperimentResultMetricCountTypeEnumTotalTurnCount       GoogleCloudDialogflowCxV3beta1ExperimentResultMetricCountTypeEnum = "TOTAL_TURN_COUNT"
	GoogleCloudDialogflowCxV3beta1ExperimentResultMetricCountTypeEnumAverageTurnCount     GoogleCloudDialogflowCxV3beta1ExperimentResultMetricCountTypeEnum = "AVERAGE_TURN_COUNT"
)

type GoogleCloudDialogflowCxV3beta1ExperimentResultMetricTypeEnum string

const (
	GoogleCloudDialogflowCxV3beta1ExperimentResultMetricTypeEnumMetricUnspecified              GoogleCloudDialogflowCxV3beta1ExperimentResultMetricTypeEnum = "METRIC_UNSPECIFIED"
	GoogleCloudDialogflowCxV3beta1ExperimentResultMetricTypeEnumContainedSessionNoCallbackRate GoogleCloudDialogflowCxV3beta1ExperimentResultMetricTypeEnum = "CONTAINED_SESSION_NO_CALLBACK_RATE"
	GoogleCloudDialogflowCxV3beta1ExperimentResultMetricTypeEnumLiveAgentHandoffRate           GoogleCloudDialogflowCxV3beta1ExperimentResultMetricTypeEnum = "LIVE_AGENT_HANDOFF_RATE"
	GoogleCloudDialogflowCxV3beta1ExperimentResultMetricTypeEnumCallbackSessionRate            GoogleCloudDialogflowCxV3beta1ExperimentResultMetricTypeEnum = "CALLBACK_SESSION_RATE"
	GoogleCloudDialogflowCxV3beta1ExperimentResultMetricTypeEnumAbandonedSessionRate           GoogleCloudDialogflowCxV3beta1ExperimentResultMetricTypeEnum = "ABANDONED_SESSION_RATE"
	GoogleCloudDialogflowCxV3beta1ExperimentResultMetricTypeEnumSessionEndRate                 GoogleCloudDialogflowCxV3beta1ExperimentResultMetricTypeEnum = "SESSION_END_RATE"
)

type GoogleCloudDialogflowCxV3beta1ExperimentResultMetric struct {
	ConfidenceInterval *GoogleCloudDialogflowCxV3beta1ExperimentResultConfidenceInterval  `json:"confidenceInterval,omitempty"`
	Count              *float64                                                           `json:"count,omitempty"`
	CountType          *GoogleCloudDialogflowCxV3beta1ExperimentResultMetricCountTypeEnum `json:"countType,omitempty"`
	Ratio              *float64                                                           `json:"ratio,omitempty"`
	Type               *GoogleCloudDialogflowCxV3beta1ExperimentResultMetricTypeEnum      `json:"type,omitempty"`
}
