package shared

type TppMessage409Pis struct {
	Category TppMessageCategoryEnum `json:"category"`
	Code     MessageCode409PisEnum  `json:"code"`
	Path     *string                `json:"path"`
	Text     *string                `json:"text"`
}
