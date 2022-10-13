package shared

type Error404NgPiis struct {
	Links       map[string]HrefType `json:"_links"`
	TppMessages []TppMessage404Piis `json:"tppMessages"`
}
