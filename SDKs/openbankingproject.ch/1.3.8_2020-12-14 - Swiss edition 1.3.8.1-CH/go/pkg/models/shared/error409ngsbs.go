package shared

// Error409NgSbs
// NextGen specific definition of reporting error information in case of a HTTP error code 409.
type Error409NgSbs struct {
	Links       map[string]HrefType `json:"_links,omitempty"`
	TppMessages []TppMessage409Sbs  `json:"tppMessages,omitempty"`
}
