package shared

// GoogleCloudRetailV2ImportCompletionDataRequest
// Request message for ImportCompletionData methods.
type GoogleCloudRetailV2ImportCompletionDataRequest struct {
	InputConfig             *GoogleCloudRetailV2CompletionDataInputConfig `json:"inputConfig,omitempty"`
	NotificationPubsubTopic *string                                       `json:"notificationPubsubTopic,omitempty"`
}
