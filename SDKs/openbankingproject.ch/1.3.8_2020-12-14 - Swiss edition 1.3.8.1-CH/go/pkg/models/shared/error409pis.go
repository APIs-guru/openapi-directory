package shared

// Error409PisAdditionalErrors
// This is a data element to support the declaration of additional errors in the context of [RFC7807].
type Error409PisAdditionalErrors struct {
	Code   MessageCode409PisEnum `json:"code"`
	Detail *string               `json:"detail,omitempty"`
	Title  *string               `json:"title,omitempty"`
}

// Error409Pis
// Standardised definition of reporting error information according to [RFC7807]
// in case of a HTTP error code 409 for PIS.
type Error409Pis struct {
	Links            map[string]HrefType           `json:"_links,omitempty"`
	AdditionalErrors []Error409PisAdditionalErrors `json:"additionalErrors,omitempty"`
	Code             MessageCode409PisEnum         `json:"code"`
	Detail           *string                       `json:"detail,omitempty"`
	Title            *string                       `json:"title,omitempty"`
	Type             string                        `json:"type"`
}
