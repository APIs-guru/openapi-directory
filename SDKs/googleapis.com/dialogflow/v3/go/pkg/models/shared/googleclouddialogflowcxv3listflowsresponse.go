package shared

// GoogleCloudDialogflowCxV3ListFlowsResponse
// The response message for Flows.ListFlows.
type GoogleCloudDialogflowCxV3ListFlowsResponse struct {
	Flows         []GoogleCloudDialogflowCxV3Flow `json:"flows,omitempty"`
	NextPageToken *string                         `json:"nextPageToken,omitempty"`
}
