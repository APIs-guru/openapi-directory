package shared

type GoogleCloudDialogflowV2IntentMessageMediaContentResponseMediaObject struct {
	ContentURL  *string                                    `json:"contentUrl"`
	Description *string                                    `json:"description"`
	Icon        *GoogleCloudDialogflowV2IntentMessageImage `json:"icon"`
	LargeImage  *GoogleCloudDialogflowV2IntentMessageImage `json:"largeImage"`
	Name        *string                                    `json:"name"`
}
