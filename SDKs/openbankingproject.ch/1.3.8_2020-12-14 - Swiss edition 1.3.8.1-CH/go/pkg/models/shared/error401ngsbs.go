package shared

type Error401NgSbs struct {
	Links       map[string]HrefType `json:"_links"`
	TppMessages []TppMessage401Sbs  `json:"tppMessages"`
}
