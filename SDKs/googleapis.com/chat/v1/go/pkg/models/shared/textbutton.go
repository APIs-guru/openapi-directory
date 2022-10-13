package shared

type TextButton struct {
	OnClick *OnClick `json:"onClick"`
	Text    *string  `json:"text"`
}
