package shared

// Error403NgAis
// NextGen specific definition of reporting error information in case of a HTTP error code 403.
type Error403NgAis struct {
	Links       map[string]HrefType `json:"_links,omitempty"`
	TppMessages []TppMessage403Ais  `json:"tppMessages,omitempty"`
}
