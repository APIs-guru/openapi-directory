package shared

type GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestResponseTemplateEnum string

const (
	GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestResponseTemplateEnumDataFormatUnspecified  GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestResponseTemplateEnum = "DATA_FORMAT_UNSPECIFIED"
	GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestResponseTemplateEnumTableConfig            GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestResponseTemplateEnum = "TABLE_CONFIG"
	GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestResponseTemplateEnumAploseSeriesListConfig GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestResponseTemplateEnum = "APLOSE_SERIES_LIST_CONFIG"
)

type GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequest struct {
	Duration         *string                                                                         `json:"duration"`
	EndTime          *string                                                                         `json:"endTime"`
	MashQuery        *GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQuery            `json:"mashQuery"`
	MetricFieldTable *bool                                                                           `json:"metricFieldTable"`
	OutputPeriod     *string                                                                         `json:"outputPeriod"`
	ResponseTemplate *GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestResponseTemplateEnum `json:"responseTemplate"`
}
