package shared

type TppMessage400Pis struct {
	Category TppMessageCategoryEnum `json:"category"`
	Code     MessageCode400PisEnum  `json:"code"`
	Path     *string                `json:"path"`
	Text     *string                `json:"text"`
}
