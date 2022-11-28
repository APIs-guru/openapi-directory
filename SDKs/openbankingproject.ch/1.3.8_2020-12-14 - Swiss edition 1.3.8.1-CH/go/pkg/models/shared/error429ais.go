package shared

// Error429AisAdditionalErrors
// This is a data element to support the declaration of additional errors in the context of [RFC7807]
// in case of a HTTP error code 429 for.
type Error429AisAdditionalErrors struct {
	Code   MessageCode429AisEnum `json:"code"`
	Detail *string               `json:"detail,omitempty"`
	Title  *string               `json:"title,omitempty"`
}

// Error429Ais
// Standardised definition of reporting error information according to [RFC7807]
// in case of a HTTP error code 429 for AIS.
type Error429Ais struct {
	Links            map[string]HrefType           `json:"_links,omitempty"`
	AdditionalErrors []Error429AisAdditionalErrors `json:"additionalErrors,omitempty"`
	Code             MessageCode429AisEnum         `json:"code"`
	Detail           *string                       `json:"detail,omitempty"`
	Title            *string                       `json:"title,omitempty"`
	Type             string                        `json:"type"`
}
