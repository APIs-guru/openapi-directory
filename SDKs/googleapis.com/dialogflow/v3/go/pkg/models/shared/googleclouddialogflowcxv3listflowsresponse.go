package shared

type GoogleCloudDialogflowCxV3ListFlowsResponse struct {
	Flows         []GoogleCloudDialogflowCxV3Flow `json:"flows"`
	NextPageToken *string                         `json:"nextPageToken"`
}
