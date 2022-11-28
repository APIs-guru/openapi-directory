package shared

// Error405NgSbs
// NextGen specific definition of reporting error information in case of a HTTP error code 401.
type Error405NgSbs struct {
	Links       map[string]HrefType `json:"_links,omitempty"`
	TppMessages []TppMessage405Sbs  `json:"tppMessages,omitempty"`
}
