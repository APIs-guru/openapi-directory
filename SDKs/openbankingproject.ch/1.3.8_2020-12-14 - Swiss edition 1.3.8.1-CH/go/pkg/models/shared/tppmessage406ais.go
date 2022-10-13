package shared

type TppMessage406Ais struct {
	Category TppMessageCategoryEnum `json:"category"`
	Code     MessageCode406AisEnum  `json:"code"`
	Path     *string                `json:"path"`
	Text     *string                `json:"text"`
}
