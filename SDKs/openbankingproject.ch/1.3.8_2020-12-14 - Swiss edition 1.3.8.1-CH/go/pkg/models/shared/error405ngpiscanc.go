package shared

// Error405NgPisCanc
// NextGen specific definition of reporting error information in case of a HTTP error code 401.
type Error405NgPisCanc struct {
	Links       map[string]HrefType    `json:"_links,omitempty"`
	TppMessages []TppMessage405PisCanc `json:"tppMessages,omitempty"`
}
