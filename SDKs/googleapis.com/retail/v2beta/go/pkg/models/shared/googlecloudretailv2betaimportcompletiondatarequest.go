package shared

type GoogleCloudRetailV2betaImportCompletionDataRequest struct {
	InputConfig             *GoogleCloudRetailV2betaCompletionDataInputConfig `json:"inputConfig"`
	NotificationPubsubTopic *string                                           `json:"notificationPubsubTopic"`
}
