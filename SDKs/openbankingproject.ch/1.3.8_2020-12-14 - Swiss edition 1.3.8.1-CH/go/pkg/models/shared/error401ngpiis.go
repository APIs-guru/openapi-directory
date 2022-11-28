package shared

// Error401NgPiis
// NextGen specific definition of reporting error information in case of a HTTP error code 401.
type Error401NgPiis struct {
	Links       map[string]HrefType `json:"_links,omitempty"`
	TppMessages []TppMessage401Piis `json:"tppMessages,omitempty"`
}
