package shared

type Button struct {
	ImageButton *ImageButton `json:"imageButton,omitempty"`
	TextButton  *TextButton  `json:"textButton,omitempty"`
}
