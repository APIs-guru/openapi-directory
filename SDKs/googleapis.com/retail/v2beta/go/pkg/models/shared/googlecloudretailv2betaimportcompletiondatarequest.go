package shared

// GoogleCloudRetailV2betaImportCompletionDataRequest
// Request message for ImportCompletionData methods.
type GoogleCloudRetailV2betaImportCompletionDataRequest struct {
	InputConfig             *GoogleCloudRetailV2betaCompletionDataInputConfig `json:"inputConfig,omitempty"`
	NotificationPubsubTopic *string                                           `json:"notificationPubsubTopic,omitempty"`
}
