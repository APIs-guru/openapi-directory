package shared

// GoogleAppsCardV1CardAction
// A card action is the action associated with the card. For example, an invoice card might include actions such as delete invoice, email invoice, or open the invoice in a browser. Not supported by Chat apps.
type GoogleAppsCardV1CardAction struct {
	ActionLabel *string                  `json:"actionLabel,omitempty"`
	OnClick     *GoogleAppsCardV1OnClick `json:"onClick,omitempty"`
}
