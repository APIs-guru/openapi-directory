package shared

type Error403NgPiis struct {
	Links       map[string]HrefType `json:"_links"`
	TppMessages []TppMessage403Piis `json:"tppMessages"`
}
