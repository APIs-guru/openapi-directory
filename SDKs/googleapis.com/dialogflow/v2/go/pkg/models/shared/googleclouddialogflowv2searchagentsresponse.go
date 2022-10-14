package shared

type GoogleCloudDialogflowV2SearchAgentsResponse struct {
	Agents        []GoogleCloudDialogflowV2Agent `json:"agents,omitempty"`
	NextPageToken *string                        `json:"nextPageToken,omitempty"`
}
