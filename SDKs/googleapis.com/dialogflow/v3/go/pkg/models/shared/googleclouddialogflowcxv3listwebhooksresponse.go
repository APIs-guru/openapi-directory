package shared

// GoogleCloudDialogflowCxV3ListWebhooksResponse
// The response message for Webhooks.ListWebhooks.
type GoogleCloudDialogflowCxV3ListWebhooksResponse struct {
	NextPageToken *string                            `json:"nextPageToken,omitempty"`
	Webhooks      []GoogleCloudDialogflowCxV3Webhook `json:"webhooks,omitempty"`
}
