package shared

// Error405PisAdditionalErrors
// This is a data element to support the declaration of additional errors in the context of [RFC7807].
type Error405PisAdditionalErrors struct {
	Code   MessageCode405PisEnum `json:"code"`
	Detail *string               `json:"detail,omitempty"`
	Title  *string               `json:"title,omitempty"`
}

// Error405Pis
// Standardised definition of reporting error information according to [RFC7807]
// in case of a HTTP error code 405 for PIS.
type Error405Pis struct {
	Links            map[string]HrefType           `json:"_links,omitempty"`
	AdditionalErrors []Error405PisAdditionalErrors `json:"additionalErrors,omitempty"`
	Code             MessageCode405PisEnum         `json:"code"`
	Detail           *string                       `json:"detail,omitempty"`
	Title            *string                       `json:"title,omitempty"`
	Type             string                        `json:"type"`
}
