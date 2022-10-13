package shared

type GoogleCloudDialogflowV2SearchAgentsResponse struct {
	Agents        []GoogleCloudDialogflowV2Agent `json:"agents"`
	NextPageToken *string                        `json:"nextPageToken"`
}
