package shared

// Error404NgPis
// NextGen specific definition of reporting error information in case of a HTTP error code 404.
type Error404NgPis struct {
	Links       map[string]HrefType `json:"_links,omitempty"`
	TppMessages []TppMessage404Pis  `json:"tppMessages,omitempty"`
}
