package shared

type GoogleCloudDialogflowCxV3beta1ListFlowsResponse struct {
	Flows         []GoogleCloudDialogflowCxV3beta1Flow `json:"flows"`
	NextPageToken *string                              `json:"nextPageToken"`
}
