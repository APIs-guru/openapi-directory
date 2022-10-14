package shared

type TppMessage409Sbs struct {
	Category TppMessageCategoryEnum `json:"category"`
	Code     MessageCode409SbsEnum  `json:"code"`
	Path     *string                `json:"path,omitempty"`
	Text     *string                `json:"text,omitempty"`
}
