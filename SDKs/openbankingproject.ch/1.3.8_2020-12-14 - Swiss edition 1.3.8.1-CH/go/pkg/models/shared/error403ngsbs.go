package shared

// Error403NgSbs
// NextGen specific definition of reporting error information in case of a HTTP error code 403.
type Error403NgSbs struct {
	Links       map[string]HrefType `json:"_links,omitempty"`
	TppMessages []TppMessage403Sbs  `json:"tppMessages,omitempty"`
}
