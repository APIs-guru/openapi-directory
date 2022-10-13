package shared

type CardWithID struct {
	Card   *GoogleAppsCardV1Card `json:"card"`
	CardID *string               `json:"cardId"`
}
