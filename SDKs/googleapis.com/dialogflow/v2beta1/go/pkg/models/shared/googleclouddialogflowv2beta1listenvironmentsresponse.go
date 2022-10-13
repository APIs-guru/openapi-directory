package shared

type GoogleCloudDialogflowV2beta1ListEnvironmentsResponse struct {
	Environments  []GoogleCloudDialogflowV2beta1Environment `json:"environments"`
	NextPageToken *string                                   `json:"nextPageToken"`
}
