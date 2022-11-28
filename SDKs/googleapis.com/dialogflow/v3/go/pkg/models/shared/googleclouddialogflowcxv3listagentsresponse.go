package shared

// GoogleCloudDialogflowCxV3ListAgentsResponse
// The response message for Agents.ListAgents.
type GoogleCloudDialogflowCxV3ListAgentsResponse struct {
	Agents        []GoogleCloudDialogflowCxV3Agent `json:"agents,omitempty"`
	NextPageToken *string                          `json:"nextPageToken,omitempty"`
}
