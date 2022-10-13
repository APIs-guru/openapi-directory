package shared

type GoogleAppsCardV1CardAction struct {
	ActionLabel *string                  `json:"actionLabel"`
	OnClick     *GoogleAppsCardV1OnClick `json:"onClick"`
}
