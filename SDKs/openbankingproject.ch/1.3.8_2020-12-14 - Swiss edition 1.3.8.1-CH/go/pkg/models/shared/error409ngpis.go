package shared

type Error409NgPis struct {
	Links       map[string]HrefType `json:"_links"`
	TppMessages []TppMessage409Pis  `json:"tppMessages"`
}
