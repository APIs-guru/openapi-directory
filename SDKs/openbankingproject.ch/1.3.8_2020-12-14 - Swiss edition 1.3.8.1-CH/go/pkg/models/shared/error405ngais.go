package shared

type Error405NgAis struct {
	Links       map[string]HrefType `json:"_links"`
	TppMessages []TppMessage405Ais  `json:"tppMessages"`
}
