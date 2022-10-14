package shared

type Error403NgAis struct {
	Links       map[string]HrefType `json:"_links,omitempty"`
	TppMessages []TppMessage403Ais  `json:"tppMessages,omitempty"`
}
