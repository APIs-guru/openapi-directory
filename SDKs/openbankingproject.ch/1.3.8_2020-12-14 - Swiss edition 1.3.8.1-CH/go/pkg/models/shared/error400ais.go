package shared

// Error400AisAdditionalErrors
// This is a data element to support the declaration of additional errors in the context of [RFC7807].
type Error400AisAdditionalErrors struct {
	Code   MessageCode400AisEnum `json:"code"`
	Detail *string               `json:"detail,omitempty"`
	Title  *string               `json:"title,omitempty"`
}

// Error400Ais
// Standardised definition of reporting error information according to [RFC7807]
// in case of a HTTP error code 400 for AIS.
type Error400Ais struct {
	Links            map[string]HrefType           `json:"_links,omitempty"`
	AdditionalErrors []Error400AisAdditionalErrors `json:"additionalErrors,omitempty"`
	Code             MessageCode400AisEnum         `json:"code"`
	Detail           *string                       `json:"detail,omitempty"`
	Title            *string                       `json:"title,omitempty"`
	Type             string                        `json:"type"`
}
