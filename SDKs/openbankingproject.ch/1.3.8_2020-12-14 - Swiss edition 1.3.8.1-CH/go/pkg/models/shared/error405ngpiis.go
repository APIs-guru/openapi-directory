package shared

// Error405NgPiis
// NextGen specific definition of reporting error information in case of a HTTP error code 401.
type Error405NgPiis struct {
	Links       map[string]HrefType `json:"_links,omitempty"`
	TppMessages []TppMessage405Piis `json:"tppMessages,omitempty"`
}
