package shared

// Error409AisAdditionalErrors
// This is a data element to support the declaration of additional errors in the context of [RFC7807].
type Error409AisAdditionalErrors struct {
	Code   MessageCode409AisEnum `json:"code"`
	Detail *string               `json:"detail,omitempty"`
	Title  *string               `json:"title,omitempty"`
}

// Error409Ais
// Standardised definition of reporting error information according to [RFC7807]
// in case of a HTTP error code 409 for AIS.
type Error409Ais struct {
	Links            map[string]HrefType           `json:"_links,omitempty"`
	AdditionalErrors []Error409AisAdditionalErrors `json:"additionalErrors,omitempty"`
	Code             MessageCode409AisEnum         `json:"code"`
	Detail           *string                       `json:"detail,omitempty"`
	Title            *string                       `json:"title,omitempty"`
	Type             string                        `json:"type"`
}
