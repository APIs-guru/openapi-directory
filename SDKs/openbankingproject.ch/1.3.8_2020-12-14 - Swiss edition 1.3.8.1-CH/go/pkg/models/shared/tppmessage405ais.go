package shared

type TppMessage405Ais struct {
	Category TppMessageCategoryEnum `json:"category"`
	Code     MessageCode405AisEnum  `json:"code"`
	Path     *string                `json:"path,omitempty"`
	Text     *string                `json:"text,omitempty"`
}
