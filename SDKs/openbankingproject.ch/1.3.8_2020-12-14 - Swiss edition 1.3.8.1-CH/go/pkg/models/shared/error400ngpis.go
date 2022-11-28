package shared

// Error400NgPis
// NextGen specific definition of reporting error information in case of a HTTP error code 400.
type Error400NgPis struct {
	Links       map[string]HrefType `json:"_links,omitempty"`
	TppMessages []TppMessage400Pis  `json:"tppMessages,omitempty"`
}
