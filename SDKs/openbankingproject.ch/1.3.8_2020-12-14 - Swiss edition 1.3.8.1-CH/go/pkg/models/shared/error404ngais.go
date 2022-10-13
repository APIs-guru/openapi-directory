package shared

type Error404NgAis struct {
	Links       map[string]HrefType `json:"_links"`
	TppMessages []TppMessage404Ais  `json:"tppMessages"`
}
