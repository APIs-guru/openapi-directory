package shared

type GoogleCloudDialogflowCxV3ListEnvironmentsResponse struct {
	Environments  []GoogleCloudDialogflowCxV3Environment `json:"environments"`
	NextPageToken *string                                `json:"nextPageToken"`
}
