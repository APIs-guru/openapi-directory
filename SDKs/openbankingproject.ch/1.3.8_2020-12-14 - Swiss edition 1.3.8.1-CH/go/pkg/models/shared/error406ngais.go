package shared

type Error406NgAis struct {
	Links       map[string]HrefType `json:"_links"`
	TppMessages []TppMessage406Ais  `json:"tppMessages"`
}
