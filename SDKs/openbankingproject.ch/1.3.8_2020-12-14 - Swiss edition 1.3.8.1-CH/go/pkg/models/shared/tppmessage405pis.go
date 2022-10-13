package shared

type TppMessage405Pis struct {
	Category TppMessageCategoryEnum `json:"category"`
	Code     MessageCode405PisEnum  `json:"code"`
	Path     *string                `json:"path"`
	Text     *string                `json:"text"`
}
