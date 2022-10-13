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

type EnterpriseCrmEventbusProtoWorkflowAlertConfig struct {
	AggregationPeriod     *string                                                         `json:"aggregationPeriod"`
	AlertDisabled         *bool                                                           `json:"alertDisabled"`
	AlertName             *string                                                         `json:"alertName"`
	ClientID              *string                                                         `json:"clientId"`
	DurationThresholdMs   *string                                                         `json:"durationThresholdMs"`
	ErrorEnumList         *EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList         `json:"errorEnumList"`
	MetricType            *EnterpriseCrmEventbusProtoWorkflowAlertConfigMetricTypeEnum    `json:"metricType"`
	NumAggregationPeriods *int32                                                          `json:"numAggregationPeriods"`
	OnlyFinalAttempt      *bool                                                           `json:"onlyFinalAttempt"`
	PlaybookURL           *string                                                         `json:"playbookUrl"`
	ThresholdType         *EnterpriseCrmEventbusProtoWorkflowAlertConfigThresholdTypeEnum `json:"thresholdType"`
	ThresholdValue        *EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue        `json:"thresholdValue"`
	WarningEnumList       *EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList         `json:"warningEnumList"`
}
