package shared

type GoogleCloudRetailV2ImportCompletionDataRequest struct {
	InputConfig             *GoogleCloudRetailV2CompletionDataInputConfig `json:"inputConfig,omitempty"`
	NotificationPubsubTopic *string                                       `json:"notificationPubsubTopic,omitempty"`
}
