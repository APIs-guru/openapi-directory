package shared

type Error404NgSbs struct {
	Links       map[string]HrefType `json:"_links"`
	TppMessages []TppMessage404Sbs  `json:"tppMessages"`
}
