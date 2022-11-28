package shared

// Error403AisAdditionalErrors
// This is a data element to support the declaration of additional errors in the context of [RFC7807].
type Error403AisAdditionalErrors struct {
	Code   MessageCode403AisEnum `json:"code"`
	Detail *string               `json:"detail,omitempty"`
	Title  *string               `json:"title,omitempty"`
}

// Error403Ais
// Standardised definition of reporting error information according to [RFC7807]
// in case of a HTTP error code 403 for AIS.
type Error403Ais struct {
	Links            map[string]HrefType           `json:"_links,omitempty"`
	AdditionalErrors []Error403AisAdditionalErrors `json:"additionalErrors,omitempty"`
	Code             MessageCode403AisEnum         `json:"code"`
	Detail           *string                       `json:"detail,omitempty"`
	Title            *string                       `json:"title,omitempty"`
	Type             string                        `json:"type"`
}
