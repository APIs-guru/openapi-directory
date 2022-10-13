package shared

type GoogleCloudRetailV2alphaImportCompletionDataRequest struct {
	InputConfig             *GoogleCloudRetailV2alphaCompletionDataInputConfig `json:"inputConfig"`
	NotificationPubsubTopic *string                                            `json:"notificationPubsubTopic"`
}
