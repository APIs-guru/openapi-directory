package shared

type TppMessage400Ais struct {
	Category TppMessageCategoryEnum `json:"category"`
	Code     MessageCode400AisEnum  `json:"code"`
	Path     *string                `json:"path,omitempty"`
	Text     *string                `json:"text,omitempty"`
}
