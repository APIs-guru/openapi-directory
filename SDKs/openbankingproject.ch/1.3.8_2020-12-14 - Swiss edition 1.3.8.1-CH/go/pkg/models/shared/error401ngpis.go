package shared

type Error401NgPis struct {
	Links       map[string]HrefType `json:"_links"`
	TppMessages []TppMessage401Pis  `json:"tppMessages"`
}
