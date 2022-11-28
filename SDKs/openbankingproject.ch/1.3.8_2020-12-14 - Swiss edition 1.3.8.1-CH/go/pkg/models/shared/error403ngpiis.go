package shared

// Error403NgPiis
// NextGen specific definition of reporting error information in case of a HTTP error code 403.
type Error403NgPiis struct {
	Links       map[string]HrefType `json:"_links,omitempty"`
	TppMessages []TppMessage403Piis `json:"tppMessages,omitempty"`
}
