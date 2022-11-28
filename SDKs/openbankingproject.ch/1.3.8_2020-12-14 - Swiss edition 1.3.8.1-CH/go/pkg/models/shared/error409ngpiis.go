package shared

// Error409NgPiis
// NextGen specific definition of reporting error information in case of a HTTP error code 409.
type Error409NgPiis struct {
	Links       map[string]HrefType `json:"_links,omitempty"`
	TppMessages []TppMessage409Piis `json:"tppMessages,omitempty"`
}
