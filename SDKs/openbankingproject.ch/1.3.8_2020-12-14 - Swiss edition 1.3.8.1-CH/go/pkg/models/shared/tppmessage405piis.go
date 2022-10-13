package shared

type TppMessage405Piis struct {
	Category TppMessageCategoryEnum `json:"category"`
	Code     MessageCode405PiisEnum `json:"code"`
	Path     *string                `json:"path"`
	Text     *string                `json:"text"`
}
