package shared

// GoogleCloudDialogflowV2beta1SearchAgentsResponse
// The response message for Agents.SearchAgents.
type GoogleCloudDialogflowV2beta1SearchAgentsResponse struct {
	Agents        []GoogleCloudDialogflowV2beta1Agent `json:"agents,omitempty"`
	NextPageToken *string                             `json:"nextPageToken,omitempty"`
}
