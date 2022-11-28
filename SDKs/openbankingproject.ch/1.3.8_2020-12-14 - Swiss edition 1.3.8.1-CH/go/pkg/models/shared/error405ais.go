package shared

// Error405AisAdditionalErrors
// This is a data element to support the declaration of additional errors in the context of [RFC7807].
type Error405AisAdditionalErrors struct {
	Code   MessageCode405AisEnum `json:"code"`
	Detail *string               `json:"detail,omitempty"`
	Title  *string               `json:"title,omitempty"`
}

// Error405Ais
// Standardised definition of reporting error information according to [RFC7807]
// in case of a HTTP error code 405 for AIS.
type Error405Ais struct {
	Links            map[string]HrefType           `json:"_links,omitempty"`
	AdditionalErrors []Error405AisAdditionalErrors `json:"additionalErrors,omitempty"`
	Code             MessageCode405AisEnum         `json:"code"`
	Detail           *string                       `json:"detail,omitempty"`
	Title            *string                       `json:"title,omitempty"`
	Type             string                        `json:"type"`
}
