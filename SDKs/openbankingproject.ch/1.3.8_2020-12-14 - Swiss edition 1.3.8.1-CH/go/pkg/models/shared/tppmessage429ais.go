package shared

type TppMessage429Ais struct {
	Category TppMessageCategoryEnum `json:"category"`
	Code     MessageCode429AisEnum  `json:"code"`
	Path     *string                `json:"path"`
	Text     *string                `json:"text"`
}
