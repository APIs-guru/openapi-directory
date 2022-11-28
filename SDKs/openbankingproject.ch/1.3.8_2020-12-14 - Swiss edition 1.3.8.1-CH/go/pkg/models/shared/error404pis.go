package shared

// Error404PisAdditionalErrors
// This is a data element to support the declaration of additional errors in the context of [RFC7807].
type Error404PisAdditionalErrors struct {
	Code   MessageCode404PisEnum `json:"code"`
	Detail *string               `json:"detail,omitempty"`
	Title  *string               `json:"title,omitempty"`
}

// Error404Pis
// Standardised definition of reporting error information according to [RFC7807]
// in case of a HTTP error code 404 for PIS.
type Error404Pis struct {
	Links            map[string]HrefType           `json:"_links,omitempty"`
	AdditionalErrors []Error404PisAdditionalErrors `json:"additionalErrors,omitempty"`
	Code             MessageCode404PisEnum         `json:"code"`
	Detail           *string                       `json:"detail,omitempty"`
	Title            *string                       `json:"title,omitempty"`
	Type             string                        `json:"type"`
}
