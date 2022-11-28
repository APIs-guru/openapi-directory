package shared

type GoogleCloudDialogflowCxV3ExperimentResultMetricCountTypeEnum string

const (
	GoogleCloudDialogflowCxV3ExperimentResultMetricCountTypeEnumCountTypeUnspecified GoogleCloudDialogflowCxV3ExperimentResultMetricCountTypeEnum = "COUNT_TYPE_UNSPECIFIED"
	GoogleCloudDialogflowCxV3ExperimentResultMetricCountTypeEnumTotalNoMatchCount    GoogleCloudDialogflowCxV3ExperimentResultMetricCountTypeEnum = "TOTAL_NO_MATCH_COUNT"
	GoogleCloudDialogflowCxV3ExperimentResultMetricCountTypeEnumTotalTurnCount       GoogleCloudDialogflowCxV3ExperimentResultMetricCountTypeEnum = "TOTAL_TURN_COUNT"
	GoogleCloudDialogflowCxV3ExperimentResultMetricCountTypeEnumAverageTurnCount     GoogleCloudDialogflowCxV3ExperimentResultMetricCountTypeEnum = "AVERAGE_TURN_COUNT"
)

type GoogleCloudDialogflowCxV3ExperimentResultMetricTypeEnum string

const (
	GoogleCloudDialogflowCxV3ExperimentResultMetricTypeEnumMetricUnspecified              GoogleCloudDialogflowCxV3ExperimentResultMetricTypeEnum = "METRIC_UNSPECIFIED"
	GoogleCloudDialogflowCxV3ExperimentResultMetricTypeEnumContainedSessionNoCallbackRate GoogleCloudDialogflowCxV3ExperimentResultMetricTypeEnum = "CONTAINED_SESSION_NO_CALLBACK_RATE"
	GoogleCloudDialogflowCxV3ExperimentResultMetricTypeEnumLiveAgentHandoffRate           GoogleCloudDialogflowCxV3ExperimentResultMetricTypeEnum = "LIVE_AGENT_HANDOFF_RATE"
	GoogleCloudDialogflowCxV3ExperimentResultMetricTypeEnumCallbackSessionRate            GoogleCloudDialogflowCxV3ExperimentResultMetricTypeEnum = "CALLBACK_SESSION_RATE"
	GoogleCloudDialogflowCxV3ExperimentResultMetricTypeEnumAbandonedSessionRate           GoogleCloudDialogflowCxV3ExperimentResultMetricTypeEnum = "ABANDONED_SESSION_RATE"
	GoogleCloudDialogflowCxV3ExperimentResultMetricTypeEnumSessionEndRate                 GoogleCloudDialogflowCxV3ExperimentResultMetricTypeEnum = "SESSION_END_RATE"
)

// GoogleCloudDialogflowCxV3ExperimentResultMetric
// Metric and corresponding confidence intervals.
type GoogleCloudDialogflowCxV3ExperimentResultMetric struct {
	ConfidenceInterval *GoogleCloudDialogflowCxV3ExperimentResultConfidenceInterval  `json:"confidenceInterval,omitempty"`
	Count              *float64                                                      `json:"count,omitempty"`
	CountType          *GoogleCloudDialogflowCxV3ExperimentResultMetricCountTypeEnum `json:"countType,omitempty"`
	Ratio              *float64                                                      `json:"ratio,omitempty"`
	Type               *GoogleCloudDialogflowCxV3ExperimentResultMetricTypeEnum      `json:"type,omitempty"`
}
