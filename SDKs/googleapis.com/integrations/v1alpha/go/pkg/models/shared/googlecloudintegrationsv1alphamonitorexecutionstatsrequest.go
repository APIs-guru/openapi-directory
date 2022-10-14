package shared

type GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestResponseTemplateEnum string

const (
	GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestResponseTemplateEnumDataFormatUnspecified  GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestResponseTemplateEnum = "DATA_FORMAT_UNSPECIFIED"
	GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestResponseTemplateEnumTableConfig            GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestResponseTemplateEnum = "TABLE_CONFIG"
	GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestResponseTemplateEnumAploseSeriesListConfig GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestResponseTemplateEnum = "APLOSE_SERIES_LIST_CONFIG"
)

type GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequest struct {
	Duration         *string                                                                         `json:"duration,omitempty"`
	EndTime          *string                                                                         `json:"endTime,omitempty"`
	MashQuery        *GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQuery            `json:"mashQuery,omitempty"`
	MetricFieldTable *bool                                                                           `json:"metricFieldTable,omitempty"`
	OutputPeriod     *string                                                                         `json:"outputPeriod,omitempty"`
	ResponseTemplate *GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestResponseTemplateEnum `json:"responseTemplate,omitempty"`
}
