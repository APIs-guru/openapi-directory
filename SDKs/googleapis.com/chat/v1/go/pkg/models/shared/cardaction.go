package shared

type CardAction struct {
	ActionLabel *string  `json:"actionLabel,omitempty"`
	OnClick     *OnClick `json:"onClick,omitempty"`
}
