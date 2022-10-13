package shared

type Error409NgAis struct {
	Links       map[string]HrefType `json:"_links"`
	TppMessages []TppMessage409Ais  `json:"tppMessages"`
}
