package shared

// GoogleCloudDialogflowCxV3beta1ListWebhooksResponse
// The response message for Webhooks.ListWebhooks.
type GoogleCloudDialogflowCxV3beta1ListWebhooksResponse struct {
	NextPageToken *string                                 `json:"nextPageToken,omitempty"`
	Webhooks      []GoogleCloudDialogflowCxV3beta1Webhook `json:"webhooks,omitempty"`
}
