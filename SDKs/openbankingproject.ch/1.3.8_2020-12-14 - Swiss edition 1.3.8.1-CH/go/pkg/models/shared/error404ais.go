package shared

// Error404AisAdditionalErrors
// This is a data element to support the declaration of additional errors in the context of [RFC7807].
type Error404AisAdditionalErrors struct {
	Code   MessageCode404AisEnum `json:"code"`
	Detail *string               `json:"detail,omitempty"`
	Title  *string               `json:"title,omitempty"`
}

// Error404Ais
// Standardised definition of reporting error information according to [RFC7807]
// in case of a HTTP error code 404 for AIS.
type Error404Ais struct {
	Links            map[string]HrefType           `json:"_links,omitempty"`
	AdditionalErrors []Error404AisAdditionalErrors `json:"additionalErrors,omitempty"`
	Code             MessageCode404AisEnum         `json:"code"`
	Detail           *string                       `json:"detail,omitempty"`
	Title            *string                       `json:"title,omitempty"`
	Type             string                        `json:"type"`
}
