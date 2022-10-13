package shared

type GoogleCloudIntegrationsV1alphaListExecutionsResponse struct {
	ExecutionInfos []EnterpriseCrmFrontendsEventbusProtoEventExecutionInfo `json:"executionInfos"`
	Executions     []GoogleCloudIntegrationsV1alphaExecution               `json:"executions"`
	NextPageToken  *string                                                 `json:"nextPageToken"`
}
