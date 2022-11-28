package shared

// Button
// A button. Can be a text button or an image button.
type Button struct {
	ImageButton *ImageButton `json:"imageButton,omitempty"`
	TextButton  *TextButton  `json:"textButton,omitempty"`
}
