package shared

type TppMessage400Sbs struct {
	Category TppMessageCategoryEnum `json:"category"`
	Code     MessageCode400SbsEnum  `json:"code"`
	Path     *string                `json:"path"`
	Text     *string                `json:"text"`
}
