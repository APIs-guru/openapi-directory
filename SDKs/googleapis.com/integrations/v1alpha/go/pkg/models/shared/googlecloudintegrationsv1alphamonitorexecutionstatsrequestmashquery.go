package shared

// GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQuery
// The MashQuery for searching data, set both queries for Join Operation.
type GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQuery struct {
	FirstQuery    *GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryComponent     `json:"firstQuery,omitempty"`
	OperationMode *GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryOperationMode `json:"operationMode,omitempty"`
	SecondQuery   *GoogleCloudIntegrationsV1alphaMonitorExecutionStatsRequestMashQueryComponent     `json:"secondQuery,omitempty"`
}
