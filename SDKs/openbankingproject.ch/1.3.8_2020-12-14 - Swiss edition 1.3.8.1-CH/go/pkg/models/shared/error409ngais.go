package shared

// Error409NgAis
// NextGen specific definition of reporting error information in case of a HTTP error code 409.
type Error409NgAis struct {
	Links       map[string]HrefType `json:"_links,omitempty"`
	TppMessages []TppMessage409Ais  `json:"tppMessages,omitempty"`
}
