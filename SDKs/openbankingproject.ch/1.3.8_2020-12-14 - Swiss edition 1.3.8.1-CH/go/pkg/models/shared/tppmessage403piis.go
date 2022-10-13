package shared

type TppMessage403Piis struct {
	Category TppMessageCategoryEnum `json:"category"`
	Code     MessageCode403PiisEnum `json:"code"`
	Path     *string                `json:"path"`
	Text     *string                `json:"text"`
}
