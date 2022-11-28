package shared

// GoogleAppsCardV1OnClick
// Represents how to respond when users click an interactive element on a card, such as a button.
type GoogleAppsCardV1OnClick struct {
	Action                *GoogleAppsCardV1Action   `json:"action,omitempty"`
	Card                  *GoogleAppsCardV1Card     `json:"card,omitempty"`
	OpenDynamicLinkAction *GoogleAppsCardV1Action   `json:"openDynamicLinkAction,omitempty"`
	OpenLink              *GoogleAppsCardV1OpenLink `json:"openLink,omitempty"`
}
