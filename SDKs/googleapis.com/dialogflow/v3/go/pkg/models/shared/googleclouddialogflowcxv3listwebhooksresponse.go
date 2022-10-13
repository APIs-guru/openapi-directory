package shared

type GoogleCloudDialogflowCxV3ListWebhooksResponse struct {
	NextPageToken *string                            `json:"nextPageToken"`
	Webhooks      []GoogleCloudDialogflowCxV3Webhook `json:"webhooks"`
}
