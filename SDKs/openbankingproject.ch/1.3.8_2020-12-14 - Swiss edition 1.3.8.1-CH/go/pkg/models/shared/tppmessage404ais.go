package shared

type TppMessage404Ais struct {
	Category TppMessageCategoryEnum `json:"category"`
	Code     MessageCode404AisEnum  `json:"code"`
	Path     *string                `json:"path"`
	Text     *string                `json:"text"`
}
