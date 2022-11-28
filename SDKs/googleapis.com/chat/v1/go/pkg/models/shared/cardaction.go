package shared

// CardAction
// A card action is the action associated with the card. For an invoice card, a typical action would be: delete invoice, email invoice or open the invoice in browser. Not supported by Google Chat apps.
type CardAction struct {
	ActionLabel *string  `json:"actionLabel,omitempty"`
	OnClick     *OnClick `json:"onClick,omitempty"`
}
