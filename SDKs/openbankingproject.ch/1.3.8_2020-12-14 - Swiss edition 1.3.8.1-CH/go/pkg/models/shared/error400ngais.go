package shared

type Error400NgAis struct {
	Links       map[string]HrefType `json:"_links"`
	TppMessages []TppMessage400Ais  `json:"tppMessages"`
}
