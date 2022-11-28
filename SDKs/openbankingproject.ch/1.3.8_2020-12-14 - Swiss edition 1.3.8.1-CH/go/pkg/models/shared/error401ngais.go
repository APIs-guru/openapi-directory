package shared

// Error401NgAis
// NextGen specific definition of reporting error information in case of a HTTP error code 401.
type Error401NgAis struct {
	Links       map[string]HrefType `json:"_links,omitempty"`
	TppMessages []TppMessage401Ais  `json:"tppMessages,omitempty"`
}
