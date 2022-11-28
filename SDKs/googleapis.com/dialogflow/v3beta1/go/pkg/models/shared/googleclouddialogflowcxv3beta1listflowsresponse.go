package shared

// GoogleCloudDialogflowCxV3beta1ListFlowsResponse
// The response message for Flows.ListFlows.
type GoogleCloudDialogflowCxV3beta1ListFlowsResponse struct {
	Flows         []GoogleCloudDialogflowCxV3beta1Flow `json:"flows,omitempty"`
	NextPageToken *string                              `json:"nextPageToken,omitempty"`
}
