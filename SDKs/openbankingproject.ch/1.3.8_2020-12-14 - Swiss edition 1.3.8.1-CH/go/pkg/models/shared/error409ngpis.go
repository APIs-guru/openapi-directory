package shared

type Error409NgPis struct {
	Links       map[string]HrefType `json:"_links,omitempty"`
	TppMessages []TppMessage409Pis  `json:"tppMessages,omitempty"`
}
