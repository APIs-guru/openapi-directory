package shared

// Error400NgAis
// NextGen specific definition of reporting error information in case of a HTTP error code 400.
type Error400NgAis struct {
	Links       map[string]HrefType `json:"_links,omitempty"`
	TppMessages []TppMessage400Ais  `json:"tppMessages,omitempty"`
}
