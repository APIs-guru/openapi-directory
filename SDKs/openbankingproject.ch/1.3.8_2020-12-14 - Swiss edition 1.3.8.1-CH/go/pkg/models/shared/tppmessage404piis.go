package shared

type TppMessage404Piis struct {
	Category TppMessageCategoryEnum `json:"category"`
	Code     MessageCode404PiisEnum `json:"code"`
	Path     *string                `json:"path"`
	Text     *string                `json:"text"`
}
