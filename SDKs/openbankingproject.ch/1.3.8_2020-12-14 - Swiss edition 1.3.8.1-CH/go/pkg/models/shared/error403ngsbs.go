package shared

type Error403NgSbs struct {
	Links       map[string]HrefType `json:"_links"`
	TppMessages []TppMessage403Sbs  `json:"tppMessages"`
}
