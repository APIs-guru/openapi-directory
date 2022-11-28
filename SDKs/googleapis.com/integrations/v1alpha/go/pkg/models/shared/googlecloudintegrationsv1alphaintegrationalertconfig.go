package shared

type GoogleCloudIntegrationsV1alphaIntegrationAlertConfigMetricTypeEnum string

const (
	GoogleCloudIntegrationsV1alphaIntegrationAlertConfigMetricTypeEnumMetricTypeUnspecified   GoogleCloudIntegrationsV1alphaIntegrationAlertConfigMetricTypeEnum = "METRIC_TYPE_UNSPECIFIED"
	GoogleCloudIntegrationsV1alphaIntegrationAlertConfigMetricTypeEnumEventErrorRate          GoogleCloudIntegrationsV1alphaIntegrationAlertConfigMetricTypeEnum = "EVENT_ERROR_RATE"
	GoogleCloudIntegrationsV1alphaIntegrationAlertConfigMetricTypeEnumEventWarningRate        GoogleCloudIntegrationsV1alphaIntegrationAlertConfigMetricTypeEnum = "EVENT_WARNING_RATE"
	GoogleCloudIntegrationsV1alphaIntegrationAlertConfigMetricTypeEnumTaskErrorRate           GoogleCloudIntegrationsV1alphaIntegrationAlertConfigMetricTypeEnum = "TASK_ERROR_RATE"
	GoogleCloudIntegrationsV1alphaIntegrationAlertConfigMetricTypeEnumTaskWarningRate         GoogleCloudIntegrationsV1alphaIntegrationAlertConfigMetricTypeEnum = "TASK_WARNING_RATE"
	GoogleCloudIntegrationsV1alphaIntegrationAlertConfigMetricTypeEnumTaskRate                GoogleCloudIntegrationsV1alphaIntegrationAlertConfigMetricTypeEnum = "TASK_RATE"
	GoogleCloudIntegrationsV1alphaIntegrationAlertConfigMetricTypeEnumEventRate               GoogleCloudIntegrationsV1alphaIntegrationAlertConfigMetricTypeEnum = "EVENT_RATE"
	GoogleCloudIntegrationsV1alphaIntegrationAlertConfigMetricTypeEnumEventAverageDuration    GoogleCloudIntegrationsV1alphaIntegrationAlertConfigMetricTypeEnum = "EVENT_AVERAGE_DURATION"
	GoogleCloudIntegrationsV1alphaIntegrationAlertConfigMetricTypeEnumEventPercentileDuration GoogleCloudIntegrationsV1alphaIntegrationAlertConfigMetricTypeEnum = "EVENT_PERCENTILE_DURATION"
	GoogleCloudIntegrationsV1alphaIntegrationAlertConfigMetricTypeEnumTaskAverageDuration     GoogleCloudIntegrationsV1alphaIntegrationAlertConfigMetricTypeEnum = "TASK_AVERAGE_DURATION"
	GoogleCloudIntegrationsV1alphaIntegrationAlertConfigMetricTypeEnumTaskPercentileDuration  GoogleCloudIntegrationsV1alphaIntegrationAlertConfigMetricTypeEnum = "TASK_PERCENTILE_DURATION"
)

type GoogleCloudIntegrationsV1alphaIntegrationAlertConfigThresholdTypeEnum string

const (
	GoogleCloudIntegrationsV1alphaIntegrationAlertConfigThresholdTypeEnumThresholdTypeUnspecified GoogleCloudIntegrationsV1alphaIntegrationAlertConfigThresholdTypeEnum = "THRESHOLD_TYPE_UNSPECIFIED"
	GoogleCloudIntegrationsV1alphaIntegrationAlertConfigThresholdTypeEnumExpectedMin              GoogleCloudIntegrationsV1alphaIntegrationAlertConfigThresholdTypeEnum = "EXPECTED_MIN"
	GoogleCloudIntegrationsV1alphaIntegrationAlertConfigThresholdTypeEnumExpectedMax              GoogleCloudIntegrationsV1alphaIntegrationAlertConfigThresholdTypeEnum = "EXPECTED_MAX"
)

// GoogleCloudIntegrationsV1alphaIntegrationAlertConfig
// Message to be used to configure custom alerting in the {@code EventConfig} protos for an event.
type GoogleCloudIntegrationsV1alphaIntegrationAlertConfig struct {
	AggregationPeriod *string                                                                `json:"aggregationPeriod,omitempty"`
	AlertThreshold    *int32                                                                 `json:"alertThreshold,omitempty"`
	DisableAlert      *bool                                                                  `json:"disableAlert,omitempty"`
	DisplayName       *string                                                                `json:"displayName,omitempty"`
	DurationThreshold *string                                                                `json:"durationThreshold,omitempty"`
	MetricType        *GoogleCloudIntegrationsV1alphaIntegrationAlertConfigMetricTypeEnum    `json:"metricType,omitempty"`
	OnlyFinalAttempt  *bool                                                                  `json:"onlyFinalAttempt,omitempty"`
	ThresholdType     *GoogleCloudIntegrationsV1alphaIntegrationAlertConfigThresholdTypeEnum `json:"thresholdType,omitempty"`
	ThresholdValue    *GoogleCloudIntegrationsV1alphaIntegrationAlertConfigThresholdValue    `json:"thresholdValue,omitempty"`
}
