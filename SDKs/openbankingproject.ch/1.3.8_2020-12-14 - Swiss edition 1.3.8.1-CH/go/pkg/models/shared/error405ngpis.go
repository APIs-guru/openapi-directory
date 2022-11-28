package shared

// Error405NgPis
// NextGen specific definition of reporting error information in case of a HTTP error code 401.
type Error405NgPis struct {
	Links       map[string]HrefType `json:"_links,omitempty"`
	TppMessages []TppMessage405Pis  `json:"tppMessages,omitempty"`
}
