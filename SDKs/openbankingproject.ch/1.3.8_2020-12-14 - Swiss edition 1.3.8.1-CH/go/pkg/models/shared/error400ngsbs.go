package shared

// Error400NgSbs
// NextGen specific definition of reporting error information in case of a HTTP error code 400.
type Error400NgSbs struct {
	Links       map[string]HrefType `json:"_links,omitempty"`
	TppMessages []TppMessage400Sbs  `json:"tppMessages,omitempty"`
}
