package shared

// GoogleCloudIntegrationsV1alphaListExecutionsResponse
// Response for listing the integration execution data.
type GoogleCloudIntegrationsV1alphaListExecutionsResponse struct {
	ExecutionInfos []EnterpriseCrmFrontendsEventbusProtoEventExecutionInfo `json:"executionInfos,omitempty"`
	Executions     []GoogleCloudIntegrationsV1alphaExecution               `json:"executions,omitempty"`
	NextPageToken  *string                                                 `json:"nextPageToken,omitempty"`
}
