package shared

// GoogleCloudIntegrationsV1alphaMonitorExecutionStatsResponse
// The response for getting Execution stats.
type GoogleCloudIntegrationsV1alphaMonitorExecutionStatsResponse struct {
	AplosSeriesListData *EnterpriseCrmCardsTemplatesAplosSeriesListData `json:"aplosSeriesListData,omitempty"`
	TableData           *EnterpriseCrmCardsTabularData                  `json:"tableData,omitempty"`
}
