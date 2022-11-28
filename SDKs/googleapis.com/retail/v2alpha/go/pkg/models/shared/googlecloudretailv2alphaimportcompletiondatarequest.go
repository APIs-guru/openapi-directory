package shared

// GoogleCloudRetailV2alphaImportCompletionDataRequest
// Request message for ImportCompletionData methods.
type GoogleCloudRetailV2alphaImportCompletionDataRequest struct {
	InputConfig             *GoogleCloudRetailV2alphaCompletionDataInputConfig `json:"inputConfig,omitempty"`
	NotificationPubsubTopic *string                                            `json:"notificationPubsubTopic,omitempty"`
}
