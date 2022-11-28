package shared

// Error404NgAis
// NextGen specific definition of reporting error information in case of a HTTP error code 404.
type Error404NgAis struct {
	Links       map[string]HrefType `json:"_links,omitempty"`
	TppMessages []TppMessage404Ais  `json:"tppMessages,omitempty"`
}
