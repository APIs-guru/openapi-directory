package shared

// Error403NgPis
// NextGen specific definition of reporting error information in case of a HTTP error code 403.
type Error403NgPis struct {
	Links       map[string]HrefType `json:"_links,omitempty"`
	TppMessages []TppMessage403Pis  `json:"tppMessages,omitempty"`
}
