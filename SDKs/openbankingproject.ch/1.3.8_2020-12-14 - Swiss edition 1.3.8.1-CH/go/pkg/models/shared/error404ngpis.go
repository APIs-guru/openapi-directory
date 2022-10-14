package shared

type Error404NgPis struct {
	Links       map[string]HrefType `json:"_links,omitempty"`
	TppMessages []TppMessage404Pis  `json:"tppMessages,omitempty"`
}
