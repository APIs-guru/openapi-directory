package shared

type Error401NgPiis struct {
	Links       map[string]HrefType `json:"_links"`
	TppMessages []TppMessage401Piis `json:"tppMessages"`
}
