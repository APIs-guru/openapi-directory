package shared

type GoogleCloudDialogflowV2ListContextsResponse struct {
	Contexts      []GoogleCloudDialogflowV2Context `json:"contexts"`
	NextPageToken *string                          `json:"nextPageToken"`
}
