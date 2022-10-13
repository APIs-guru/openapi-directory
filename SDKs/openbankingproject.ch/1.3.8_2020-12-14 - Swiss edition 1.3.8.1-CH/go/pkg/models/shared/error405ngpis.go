package shared

type Error405NgPis struct {
	Links       map[string]HrefType `json:"_links"`
	TppMessages []TppMessage405Pis  `json:"tppMessages"`
}
