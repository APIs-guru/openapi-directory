package shared

type EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnum string

const (
	EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnumMetricTypeUnspecified  EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnum = "METRIC_TYPE_UNSPECIFIED"
	EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnumTaskErrorRate          EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnum = "TASK_ERROR_RATE"
	EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnumTaskWarningRate        EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnum = "TASK_WARNING_RATE"
	EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnumTaskRate               EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnum = "TASK_RATE"
	EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnumTaskAverageDuration    EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnum = "TASK_AVERAGE_DURATION"
	EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnumTaskPercentileDuration EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnum = "TASK_PERCENTILE_DURATION"
)

type EnterpriseCrmEventbusProtoTaskAlertConfigThresholdTypeEnum string

const (
	EnterpriseCrmEventbusProtoTaskAlertConfigThresholdTypeEnumUnspecifiedThresholdType EnterpriseCrmEventbusProtoTaskAlertConfigThresholdTypeEnum = "UNSPECIFIED_THRESHOLD_TYPE"
	EnterpriseCrmEventbusProtoTaskAlertConfigThresholdTypeEnumExpectedMin              EnterpriseCrmEventbusProtoTaskAlertConfigThresholdTypeEnum = "EXPECTED_MIN"
	EnterpriseCrmEventbusProtoTaskAlertConfigThresholdTypeEnumExpectedMax              EnterpriseCrmEventbusProtoTaskAlertConfigThresholdTypeEnum = "EXPECTED_MAX"
)

type EnterpriseCrmEventbusProtoTaskAlertConfig struct {
	AggregationPeriod     *string                                                     `json:"aggregationPeriod"`
	AlertDisabled         *bool                                                       `json:"alertDisabled"`
	AlertName             *string                                                     `json:"alertName"`
	ClientID              *string                                                     `json:"clientId"`
	DurationThresholdMs   *string                                                     `json:"durationThresholdMs"`
	ErrorEnumList         *EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList     `json:"errorEnumList"`
	MetricType            *EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnum    `json:"metricType"`
	NumAggregationPeriods *int32                                                      `json:"numAggregationPeriods"`
	OnlyFinalAttempt      *bool                                                       `json:"onlyFinalAttempt"`
	PlaybookURL           *string                                                     `json:"playbookUrl"`
	ThresholdType         *EnterpriseCrmEventbusProtoTaskAlertConfigThresholdTypeEnum `json:"thresholdType"`
	ThresholdValue        *EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue    `json:"thresholdValue"`
	WarningEnumList       *EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList     `json:"warningEnumList"`
}
