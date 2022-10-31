package shared

type Error400NgSbs struct {
	Links       map[string]HrefType `json:"_links,omitempty"`
	TppMessages []TppMessage400Sbs  `json:"tppMessages,omitempty"`
}
