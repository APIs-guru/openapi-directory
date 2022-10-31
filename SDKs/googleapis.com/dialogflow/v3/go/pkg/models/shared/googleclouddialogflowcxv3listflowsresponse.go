package shared

type GoogleCloudDialogflowCxV3ListFlowsResponse struct {
	Flows         []GoogleCloudDialogflowCxV3Flow `json:"flows,omitempty"`
	NextPageToken *string                         `json:"nextPageToken,omitempty"`
}
