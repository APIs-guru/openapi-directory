package shared

type TppMessage404Sbs struct {
	Category TppMessageCategoryEnum `json:"category"`
	Code     MessageCode404SbsEnum  `json:"code"`
	Path     *string                `json:"path,omitempty"`
	Text     *string                `json:"text,omitempty"`
}
