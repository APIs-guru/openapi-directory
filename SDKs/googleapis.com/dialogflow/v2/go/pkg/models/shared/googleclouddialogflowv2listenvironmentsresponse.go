package shared

type GoogleCloudDialogflowV2ListEnvironmentsResponse struct {
	Environments  []GoogleCloudDialogflowV2Environment `json:"environments"`
	NextPageToken *string                              `json:"nextPageToken"`
}
