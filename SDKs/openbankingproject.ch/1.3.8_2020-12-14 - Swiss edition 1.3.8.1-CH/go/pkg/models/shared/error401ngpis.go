package shared

type Error401NgPis struct {
	Links       map[string]HrefType `json:"_links,omitempty"`
	TppMessages []TppMessage401Pis  `json:"tppMessages,omitempty"`
}
