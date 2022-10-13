package shared

type GoogleCloudDialogflowCxV3ListAgentsResponse struct {
	Agents        []GoogleCloudDialogflowCxV3Agent `json:"agents"`
	NextPageToken *string                          `json:"nextPageToken"`
}
