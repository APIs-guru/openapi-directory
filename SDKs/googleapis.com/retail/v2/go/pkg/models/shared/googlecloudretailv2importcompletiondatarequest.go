package shared

type GoogleCloudRetailV2ImportCompletionDataRequest struct {
	InputConfig             *GoogleCloudRetailV2CompletionDataInputConfig `json:"inputConfig"`
	NotificationPubsubTopic *string                                       `json:"notificationPubsubTopic"`
}
