package shared

type GoogleCloudDialogflowCxV3beta1ListEnvironmentsResponse struct {
	Environments  []GoogleCloudDialogflowCxV3beta1Environment `json:"environments"`
	NextPageToken *string                                     `json:"nextPageToken"`
}
