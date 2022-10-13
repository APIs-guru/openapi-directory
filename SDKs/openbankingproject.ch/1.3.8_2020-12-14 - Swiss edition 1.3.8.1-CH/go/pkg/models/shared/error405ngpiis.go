package shared

type Error405NgPiis struct {
	Links       map[string]HrefType `json:"_links"`
	TppMessages []TppMessage405Piis `json:"tppMessages"`
}
