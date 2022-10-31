package shared

type GoogleCloudDialogflowCxV3ListAgentsResponse struct {
	Agents        []GoogleCloudDialogflowCxV3Agent `json:"agents,omitempty"`
	NextPageToken *string                          `json:"nextPageToken,omitempty"`
}
