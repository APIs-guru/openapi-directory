package shared

type Error404NgPis struct {
	Links       map[string]HrefType `json:"_links"`
	TppMessages []TppMessage404Pis  `json:"tppMessages"`
}
