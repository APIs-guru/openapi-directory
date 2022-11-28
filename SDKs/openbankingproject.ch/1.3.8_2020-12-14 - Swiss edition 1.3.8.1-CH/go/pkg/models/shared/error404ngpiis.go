package shared

// Error404NgPiis
// NextGen specific definition of reporting error information in case of a HTTP error code 404.
type Error404NgPiis struct {
	Links       map[string]HrefType `json:"_links,omitempty"`
	TppMessages []TppMessage404Piis `json:"tppMessages,omitempty"`
}
