package shared

type GoogleCloudDialogflowCxV3beta1ListAgentsResponse struct {
	Agents        []GoogleCloudDialogflowCxV3beta1Agent `json:"agents,omitempty"`
	NextPageToken *string                               `json:"nextPageToken,omitempty"`
}
