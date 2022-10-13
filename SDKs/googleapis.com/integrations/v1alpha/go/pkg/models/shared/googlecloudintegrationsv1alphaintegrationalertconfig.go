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

type GoogleCloudIntegrationsV1alphaIntegrationAlertConfig struct {
	AggregationPeriod *string                                                                `json:"aggregationPeriod"`
	AlertThreshold    *int32                                                                 `json:"alertThreshold"`
	DisableAlert      *bool                                                                  `json:"disableAlert"`
	DisplayName       *string                                                                `json:"displayName"`
	DurationThreshold *string                                                                `json:"durationThreshold"`
	MetricType        *GoogleCloudIntegrationsV1alphaIntegrationAlertConfigMetricTypeEnum    `json:"metricType"`
	OnlyFinalAttempt  *bool                                                                  `json:"onlyFinalAttempt"`
	ThresholdType     *GoogleCloudIntegrationsV1alphaIntegrationAlertConfigThresholdTypeEnum `json:"thresholdType"`
	ThresholdValue    *GoogleCloudIntegrationsV1alphaIntegrationAlertConfigThresholdValue    `json:"thresholdValue"`
}
