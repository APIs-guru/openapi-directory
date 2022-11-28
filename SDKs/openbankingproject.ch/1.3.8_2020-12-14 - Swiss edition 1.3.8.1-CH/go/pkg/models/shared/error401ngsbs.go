package shared

// Error401NgSbs
// NextGen specific definition of reporting error information in case of a HTTP error code 401.
type Error401NgSbs struct {
	Links       map[string]HrefType `json:"_links,omitempty"`
	TppMessages []TppMessage401Sbs  `json:"tppMessages,omitempty"`
}
