package shared

type TppMessage400Sbs struct {
	Category TppMessageCategoryEnum `json:"category"`
	Code     MessageCode400SbsEnum  `json:"code"`
	Path     *string                `json:"path,omitempty"`
	Text     *string                `json:"text,omitempty"`
}
