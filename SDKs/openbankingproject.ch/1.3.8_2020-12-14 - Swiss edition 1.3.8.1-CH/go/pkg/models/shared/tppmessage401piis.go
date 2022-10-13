package shared

type TppMessage401Piis struct {
	Category TppMessageCategoryEnum `json:"category"`
	Code     MessageCode401PiisEnum `json:"code"`
	Path     *string                `json:"path"`
	Text     *string                `json:"text"`
}
