package shared

type Error400NgSbs struct {
	Links       map[string]HrefType `json:"_links"`
	TppMessages []TppMessage400Sbs  `json:"tppMessages"`
}
