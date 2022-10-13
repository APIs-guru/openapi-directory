package shared

type TppMessage401Pis struct {
	Category TppMessageCategoryEnum `json:"category"`
	Code     MessageCode401PisEnum  `json:"code"`
	Path     *string                `json:"path"`
	Text     *string                `json:"text"`
}
