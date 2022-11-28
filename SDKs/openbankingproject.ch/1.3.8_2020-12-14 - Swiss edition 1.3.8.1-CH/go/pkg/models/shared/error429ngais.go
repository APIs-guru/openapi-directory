package shared

// Error429NgAis
// NextGen specific definition of reporting error information in case of a HTTP error code 429.
type Error429NgAis struct {
	Links       map[string]HrefType `json:"_links,omitempty"`
	TppMessages []TppMessage429Ais  `json:"tppMessages,omitempty"`
}
