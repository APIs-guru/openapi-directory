package shared

type Error409NgPiis struct {
	Links       map[string]HrefType `json:"_links,omitempty"`
	TppMessages []TppMessage409Piis `json:"tppMessages,omitempty"`
}
