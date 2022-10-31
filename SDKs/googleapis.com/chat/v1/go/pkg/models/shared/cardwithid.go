package shared



type CardWithID struct {
    Card *GoogleAppsCardV1Card `json:"card,omitempty"`
    CardID *string `json:"cardId,omitempty"`
    
}

