package shared

type Error403NgPis struct {
	Links       map[string]HrefType `json:"_links,omitempty"`
	TppMessages []TppMessage403Pis  `json:"tppMessages,omitempty"`
}
