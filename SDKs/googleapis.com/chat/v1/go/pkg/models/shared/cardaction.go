package shared

type CardAction struct {
	ActionLabel *string  `json:"actionLabel"`
	OnClick     *OnClick `json:"onClick"`
}
