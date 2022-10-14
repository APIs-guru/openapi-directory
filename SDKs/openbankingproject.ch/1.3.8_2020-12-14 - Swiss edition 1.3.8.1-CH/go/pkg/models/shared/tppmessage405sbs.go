package shared

type TppMessage405Sbs struct {
	Category TppMessageCategoryEnum `json:"category"`
	Code     MessageCode405SbsEnum  `json:"code"`
	Path     *string                `json:"path,omitempty"`
	Text     *string                `json:"text,omitempty"`
}
