package shared

type TppMessage404Pis struct {
	Category TppMessageCategoryEnum `json:"category"`
	Code     MessageCode404PisEnum  `json:"code"`
	Path     *string                `json:"path,omitempty"`
	Text     *string                `json:"text,omitempty"`
}
