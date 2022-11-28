package shared

// GoogleAppsCardV1CardFixedFooter
// A persistent (sticky) footer that that appears at the bottom of the card. Setting `fixedFooter` without specifying a `primaryButton` or a `secondaryButton` causes an error. Chat apps support `fixedFooter` in [dialogs](https://developers.google.com/chat/how-tos/dialogs), but not in [card messages](https://developers.google.com/chat/api/guides/message-formats/cards).
type GoogleAppsCardV1CardFixedFooter struct {
	PrimaryButton   *GoogleAppsCardV1Button `json:"primaryButton,omitempty"`
	SecondaryButton *GoogleAppsCardV1Button `json:"secondaryButton,omitempty"`
}
