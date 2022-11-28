package shared

// CardWithID
// Widgets for Chat apps to specify.
type CardWithID struct {
	Card   *GoogleAppsCardV1Card `json:"card,omitempty"`
	CardID *string               `json:"cardId,omitempty"`
}
