package shared

type GoogleCloudDialogflowCxV3beta1ListEnvironmentsResponse struct {
	Environments  []GoogleCloudDialogflowCxV3beta1Environment `json:"environments,omitempty"`
	NextPageToken *string                                     `json:"nextPageToken,omitempty"`
}
