package shared

type TppMessage401Sbs struct {
	Category TppMessageCategoryEnum `json:"category"`
	Code     MessageCode401SbsEnum  `json:"code"`
	Path     *string                `json:"path"`
	Text     *string                `json:"text"`
}
