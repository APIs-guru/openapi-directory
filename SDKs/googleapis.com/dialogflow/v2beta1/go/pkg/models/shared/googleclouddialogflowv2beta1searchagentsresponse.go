package shared

type GoogleCloudDialogflowV2beta1SearchAgentsResponse struct {
	Agents        []GoogleCloudDialogflowV2beta1Agent `json:"agents,omitempty"`
	NextPageToken *string                             `json:"nextPageToken,omitempty"`
}
