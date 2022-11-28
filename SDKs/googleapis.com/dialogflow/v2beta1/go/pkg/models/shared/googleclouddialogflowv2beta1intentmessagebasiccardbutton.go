package shared

// GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton
// The button object that appears at the bottom of a card.
type GoogleCloudDialogflowV2beta1IntentMessageBasicCardButton struct {
	OpenURIAction *GoogleCloudDialogflowV2beta1IntentMessageBasicCardButtonOpenURIAction `json:"openUriAction,omitempty"`
	Title         *string                                                                `json:"title,omitempty"`
}
