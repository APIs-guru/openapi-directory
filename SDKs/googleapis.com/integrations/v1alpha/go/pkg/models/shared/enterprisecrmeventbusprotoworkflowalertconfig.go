package shared

type EnterpriseCrmEventbusProtoWorkflowAlertConfigMetricTypeEnum string

const (
	EnterpriseCrmEventbusProtoWorkflowAlertConfigMetricTypeEnumMetricTypeUnspecified   EnterpriseCrmEventbusProtoWorkflowAlertConfigMetricTypeEnum = "METRIC_TYPE_UNSPECIFIED"
	EnterpriseCrmEventbusProtoWorkflowAlertConfigMetricTypeEnumEventErrorRate          EnterpriseCrmEventbusProtoWorkflowAlertConfigMetricTypeEnum = "EVENT_ERROR_RATE"
	EnterpriseCrmEventbusProtoWorkflowAlertConfigMetricTypeEnumEventWarningRate        EnterpriseCrmEventbusProtoWorkflowAlertConfigMetricTypeEnum = "EVENT_WARNING_RATE"
	EnterpriseCrmEventbusProtoWorkflowAlertConfigMetricTypeEnumTaskErrorRate           EnterpriseCrmEventbusProtoWorkflowAlertConfigMetricTypeEnum = "TASK_ERROR_RATE"
	EnterpriseCrmEventbusProtoWorkflowAlertConfigMetricTypeEnumTaskWarningRate         EnterpriseCrmEventbusProtoWorkflowAlertConfigMetricTypeEnum = "TASK_WARNING_RATE"
	EnterpriseCrmEventbusProtoWorkflowAlertConfigMetricTypeEnumTaskRate                EnterpriseCrmEventbusProtoWorkflowAlertConfigMetricTypeEnum = "TASK_RATE"
	EnterpriseCrmEventbusProtoWorkflowAlertConfigMetricTypeEnumEventRate               EnterpriseCrmEventbusProtoWorkflowAlertConfigMetricTypeEnum = "EVENT_RATE"
	EnterpriseCrmEventbusProtoWorkflowAlertConfigMetricTypeEnumEventAverageDuration    EnterpriseCrmEventbusProtoWorkflowAlertConfigMetricTypeEnum = "EVENT_AVERAGE_DURATION"
	EnterpriseCrmEventbusProtoWorkflowAlertConfigMetricTypeEnumEventPercentileDuration EnterpriseCrmEventbusProtoWorkflowAlertConfigMetricTypeEnum = "EVENT_PERCENTILE_DURATION"
	EnterpriseCrmEventbusProtoWorkflowAlertConfigMetricTypeEnumTaskAverageDuration     EnterpriseCrmEventbusProtoWorkflowAlertConfigMetricTypeEnum = "TASK_AVERAGE_DURATION"
	EnterpriseCrmEventbusProtoWorkflowAlertConfigMetricTypeEnumTaskPercentileDuration  EnterpriseCrmEventbusProtoWorkflowAlertConfigMetricTypeEnum = "TASK_PERCENTILE_DURATION"
)

type EnterpriseCrmEventbusProtoWorkflowAlertConfigThresholdTypeEnum string

const (
	EnterpriseCrmEventbusProtoWorkflowAlertConfigThresholdTypeEnumUnspecifiedThresholdType EnterpriseCrmEventbusProtoWorkflowAlertConfigThresholdTypeEnum = "UNSPECIFIED_THRESHOLD_TYPE"
	EnterpriseCrmEventbusProtoWorkflowAlertConfigThresholdTypeEnumExpectedMin              EnterpriseCrmEventbusProtoWorkflowAlertConfigThresholdTypeEnum = "EXPECTED_MIN"
	EnterpriseCrmEventbusProtoWorkflowAlertConfigThresholdTypeEnumExpectedMax              EnterpriseCrmEventbusProtoWorkflowAlertConfigThresholdTypeEnum = "EXPECTED_MAX"
)

// EnterpriseCrmEventbusProtoWorkflowAlertConfig
// Message to be used to configure custom alerting in the {@code EventConfig} protos for an event. See go/eventbus-alert-config-examples for examples of the different alerts that can be configured.
type EnterpriseCrmEventbusProtoWorkflowAlertConfig struct {
	AggregationPeriod     *string                                                         `json:"aggregationPeriod,omitempty"`
	AlertDisabled         *bool                                                           `json:"alertDisabled,omitempty"`
	AlertName             *string                                                         `json:"alertName,omitempty"`
	ClientID              *string                                                         `json:"clientId,omitempty"`
	DurationThresholdMs   *string                                                         `json:"durationThresholdMs,omitempty"`
	ErrorEnumList         *EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList         `json:"errorEnumList,omitempty"`
	MetricType            *EnterpriseCrmEventbusProtoWorkflowAlertConfigMetricTypeEnum    `json:"metricType,omitempty"`
	NumAggregationPeriods *int32                                                          `json:"numAggregationPeriods,omitempty"`
	OnlyFinalAttempt      *bool                                                           `json:"onlyFinalAttempt,omitempty"`
	PlaybookURL           *string                                                         `json:"playbookUrl,omitempty"`
	ThresholdType         *EnterpriseCrmEventbusProtoWorkflowAlertConfigThresholdTypeEnum `json:"thresholdType,omitempty"`
	ThresholdValue        *EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue        `json:"thresholdValue,omitempty"`
	WarningEnumList       *EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList         `json:"warningEnumList,omitempty"`
}
