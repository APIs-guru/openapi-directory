package shared




type EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnum string

const (
    EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnumMetricTypeUnspecified EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnum = "METRIC_TYPE_UNSPECIFIED"
EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnumTaskErrorRate EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnum = "TASK_ERROR_RATE"
EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnumTaskWarningRate EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnum = "TASK_WARNING_RATE"
EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnumTaskRate EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnum = "TASK_RATE"
EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnumTaskAverageDuration EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnum = "TASK_AVERAGE_DURATION"
EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnumTaskPercentileDuration EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnum = "TASK_PERCENTILE_DURATION"
)



type EnterpriseCrmEventbusProtoTaskAlertConfigThresholdTypeEnum string

const (
    EnterpriseCrmEventbusProtoTaskAlertConfigThresholdTypeEnumUnspecifiedThresholdType EnterpriseCrmEventbusProtoTaskAlertConfigThresholdTypeEnum = "UNSPECIFIED_THRESHOLD_TYPE"
EnterpriseCrmEventbusProtoTaskAlertConfigThresholdTypeEnumExpectedMin EnterpriseCrmEventbusProtoTaskAlertConfigThresholdTypeEnum = "EXPECTED_MIN"
EnterpriseCrmEventbusProtoTaskAlertConfigThresholdTypeEnumExpectedMax EnterpriseCrmEventbusProtoTaskAlertConfigThresholdTypeEnum = "EXPECTED_MAX"
)


type EnterpriseCrmEventbusProtoTaskAlertConfig struct {
    AggregationPeriod *string `json:"aggregationPeriod,omitempty"`
    AlertDisabled *bool `json:"alertDisabled,omitempty"`
    AlertName *string `json:"alertName,omitempty"`
    ClientID *string `json:"clientId,omitempty"`
    DurationThresholdMs *string `json:"durationThresholdMs,omitempty"`
    ErrorEnumList *EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList `json:"errorEnumList,omitempty"`
    MetricType *EnterpriseCrmEventbusProtoTaskAlertConfigMetricTypeEnum `json:"metricType,omitempty"`
    NumAggregationPeriods *int32 `json:"numAggregationPeriods,omitempty"`
    OnlyFinalAttempt *bool `json:"onlyFinalAttempt,omitempty"`
    PlaybookURL *string `json:"playbookUrl,omitempty"`
    ThresholdType *EnterpriseCrmEventbusProtoTaskAlertConfigThresholdTypeEnum `json:"thresholdType,omitempty"`
    ThresholdValue *EnterpriseCrmEventbusProtoBaseAlertConfigThresholdValue `json:"thresholdValue,omitempty"`
    WarningEnumList *EnterpriseCrmEventbusProtoBaseAlertConfigErrorEnumList `json:"warningEnumList,omitempty"`
    
}

