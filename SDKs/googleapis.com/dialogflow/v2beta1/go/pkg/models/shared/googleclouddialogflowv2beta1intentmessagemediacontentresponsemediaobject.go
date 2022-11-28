package shared

// GoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObject
// Response media object for media content card.
type GoogleCloudDialogflowV2beta1IntentMessageMediaContentResponseMediaObject struct {
	ContentURL  *string                                         `json:"contentUrl,omitempty"`
	Description *string                                         `json:"description,omitempty"`
	Icon        *GoogleCloudDialogflowV2beta1IntentMessageImage `json:"icon,omitempty"`
	LargeImage  *GoogleCloudDialogflowV2beta1IntentMessageImage `json:"largeImage,omitempty"`
	Name        *string                                         `json:"name,omitempty"`
}
