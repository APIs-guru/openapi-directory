package shared

// TextButton
// A button with text and onclick action.
type TextButton struct {
	OnClick *OnClick `json:"onClick,omitempty"`
	Text    *string  `json:"text,omitempty"`
}
