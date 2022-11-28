package shared

// Error404NgSbs
// NextGen specific definition of reporting error information in case of a HTTP error code 404.
type Error404NgSbs struct {
	Links       map[string]HrefType `json:"_links,omitempty"`
	TppMessages []TppMessage404Sbs  `json:"tppMessages,omitempty"`
}
