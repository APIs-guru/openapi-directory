package shared

// Error405NgAis
// NextGen specific definition of reporting error information in case of a HTTP error code 401.
type Error405NgAis struct {
	Links       map[string]HrefType `json:"_links,omitempty"`
	TppMessages []TppMessage405Ais  `json:"tppMessages,omitempty"`
}
