package shared

type TppMessage409Piis struct {
	Category TppMessageCategoryEnum `json:"category"`
	Code     MessageCode409PiisEnum `json:"code"`
	Path     *string                `json:"path,omitempty"`
	Text     *string                `json:"text,omitempty"`
}
