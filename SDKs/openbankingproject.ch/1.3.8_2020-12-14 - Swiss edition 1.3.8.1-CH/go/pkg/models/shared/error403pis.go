package shared

// Error403PisAdditionalErrors
// This is a data element to support the declaration of additional errors in the context of [RFC7807].
type Error403PisAdditionalErrors struct {
	Code   MessageCode403PisEnum `json:"code"`
	Detail *string               `json:"detail,omitempty"`
	Title  *string               `json:"title,omitempty"`
}

// Error403Pis
// Standardised definition of reporting error information according to [RFC7807]
// in case of a HTTP error code 403 for PIS.
type Error403Pis struct {
	Links            map[string]HrefType           `json:"_links,omitempty"`
	AdditionalErrors []Error403PisAdditionalErrors `json:"additionalErrors,omitempty"`
	Code             MessageCode403PisEnum         `json:"code"`
	Detail           *string                       `json:"detail,omitempty"`
	Title            *string                       `json:"title,omitempty"`
	Type             string                        `json:"type"`
}
