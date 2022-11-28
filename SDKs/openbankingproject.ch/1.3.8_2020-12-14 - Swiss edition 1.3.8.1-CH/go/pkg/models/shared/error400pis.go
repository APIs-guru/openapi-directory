package shared

// Error400PisAdditionalErrors
// This is a data element to support the declaration of additional errors in the context of [RFC7807].
type Error400PisAdditionalErrors struct {
	Code   MessageCode400PisEnum `json:"code"`
	Detail *string               `json:"detail,omitempty"`
	Title  *string               `json:"title,omitempty"`
}

// Error400Pis
// Standardised definition of reporting error information according to [RFC7807]
// in case of a HTTP error code 400 for PIS.
type Error400Pis struct {
	Links            map[string]HrefType           `json:"_links,omitempty"`
	AdditionalErrors []Error400PisAdditionalErrors `json:"additionalErrors,omitempty"`
	Code             MessageCode400PisEnum         `json:"code"`
	Detail           *string                       `json:"detail,omitempty"`
	Title            *string                       `json:"title,omitempty"`
	Type             string                        `json:"type"`
}
