package shared

type GoogleCloudDialogflowCxV3beta1ListWebhooksResponse struct {
	NextPageToken *string                                 `json:"nextPageToken"`
	Webhooks      []GoogleCloudDialogflowCxV3beta1Webhook `json:"webhooks"`
}
