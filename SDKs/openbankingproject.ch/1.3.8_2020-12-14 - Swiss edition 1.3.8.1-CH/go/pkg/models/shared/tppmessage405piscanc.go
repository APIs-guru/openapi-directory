package shared

type TppMessage405PisCanc struct {
	Category TppMessageCategoryEnum    `json:"category"`
	Code     MessageCode405PisCancEnum `json:"code"`
	Path     *string                   `json:"path,omitempty"`
	Text     *string                   `json:"text,omitempty"`
}
