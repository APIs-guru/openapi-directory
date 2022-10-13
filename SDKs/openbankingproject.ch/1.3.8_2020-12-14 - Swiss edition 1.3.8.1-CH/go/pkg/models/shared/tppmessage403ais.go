package shared

type TppMessage403Ais struct {
	Category TppMessageCategoryEnum `json:"category"`
	Code     MessageCode403AisEnum  `json:"code"`
	Path     *string                `json:"path"`
	Text     *string                `json:"text"`
}
