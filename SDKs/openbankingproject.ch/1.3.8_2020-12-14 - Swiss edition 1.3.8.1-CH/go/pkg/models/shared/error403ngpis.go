package shared

type Error403NgPis struct {
	Links       map[string]HrefType `json:"_links"`
	TppMessages []TppMessage403Pis  `json:"tppMessages"`
}
