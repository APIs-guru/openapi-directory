package shared

// GoogleCloudDialogflowV2IntentMessageBasicCardButton
// The button object that appears at the bottom of a card.
type GoogleCloudDialogflowV2IntentMessageBasicCardButton struct {
	OpenURIAction *GoogleCloudDialogflowV2IntentMessageBasicCardButtonOpenURIAction `json:"openUriAction,omitempty"`
	Title         *string                                                           `json:"title,omitempty"`
}
