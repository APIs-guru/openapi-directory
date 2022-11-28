package shared

// Error409NgPis
// NextGen specific definition of reporting error information in case of a HTTP error code 409.
type Error409NgPis struct {
	Links       map[string]HrefType `json:"_links,omitempty"`
	TppMessages []TppMessage409Pis  `json:"tppMessages,omitempty"`
}
