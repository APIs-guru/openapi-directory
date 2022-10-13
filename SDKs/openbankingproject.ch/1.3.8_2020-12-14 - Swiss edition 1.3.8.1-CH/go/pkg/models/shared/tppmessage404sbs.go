package shared

type TppMessage404Sbs struct {
	Category TppMessageCategoryEnum `json:"category"`
	Code     MessageCode404SbsEnum  `json:"code"`
	Path     *string                `json:"path"`
	Text     *string                `json:"text"`
}
