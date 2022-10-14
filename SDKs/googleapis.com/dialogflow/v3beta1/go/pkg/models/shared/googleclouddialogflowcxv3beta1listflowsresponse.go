package shared

type GoogleCloudDialogflowCxV3beta1ListFlowsResponse struct {
	Flows         []GoogleCloudDialogflowCxV3beta1Flow `json:"flows,omitempty"`
	NextPageToken *string                              `json:"nextPageToken,omitempty"`
}
