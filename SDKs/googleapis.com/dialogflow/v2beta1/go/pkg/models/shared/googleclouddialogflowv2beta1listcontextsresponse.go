package shared

type GoogleCloudDialogflowV2beta1ListContextsResponse struct {
	Contexts      []GoogleCloudDialogflowV2beta1Context `json:"contexts"`
	NextPageToken *string                               `json:"nextPageToken"`
}
