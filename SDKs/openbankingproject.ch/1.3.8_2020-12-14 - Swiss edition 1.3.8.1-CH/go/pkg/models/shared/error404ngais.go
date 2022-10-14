package shared

type Error404NgAis struct {
	Links       map[string]HrefType `json:"_links,omitempty"`
	TppMessages []TppMessage404Ais  `json:"tppMessages,omitempty"`
}
