package shared

type TppMessage403Pis struct {
	Category TppMessageCategoryEnum `json:"category"`
	Code     MessageCode403PisEnum  `json:"code"`
	Path     *string                `json:"path"`
	Text     *string                `json:"text"`
}
