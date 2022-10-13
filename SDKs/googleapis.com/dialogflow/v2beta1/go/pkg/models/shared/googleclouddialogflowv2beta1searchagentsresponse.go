package shared

type GoogleCloudDialogflowV2beta1SearchAgentsResponse struct {
	Agents        []GoogleCloudDialogflowV2beta1Agent `json:"agents"`
	NextPageToken *string                             `json:"nextPageToken"`
}
