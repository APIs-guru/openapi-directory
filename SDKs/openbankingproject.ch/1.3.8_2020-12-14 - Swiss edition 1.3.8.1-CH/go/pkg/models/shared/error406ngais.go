package shared

type Error406NgAis struct {
	Links       map[string]HrefType `json:"_links,omitempty"`
	TppMessages []TppMessage406Ais  `json:"tppMessages,omitempty"`
}
