package shared

type Error400NgPis struct {
	Links       map[string]HrefType `json:"_links,omitempty"`
	TppMessages []TppMessage400Pis  `json:"tppMessages,omitempty"`
}
