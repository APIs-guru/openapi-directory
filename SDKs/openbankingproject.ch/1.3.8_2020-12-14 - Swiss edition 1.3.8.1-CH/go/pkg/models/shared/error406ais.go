package shared

// Error406AisAdditionalErrors
// This is a data element to support the declaration of additional errors in the context of [RFC7807].
type Error406AisAdditionalErrors struct {
	Code   MessageCode406AisEnum `json:"code"`
	Detail *string               `json:"detail,omitempty"`
	Title  *string               `json:"title,omitempty"`
}

// Error406Ais
// Standardised definition of reporting error information according to [RFC7807]
// in case of a HTTP error code 406 for AIS.
type Error406Ais struct {
	Links            map[string]HrefType           `json:"_links,omitempty"`
	AdditionalErrors []Error406AisAdditionalErrors `json:"additionalErrors,omitempty"`
	Code             MessageCode406AisEnum         `json:"code"`
	Detail           *string                       `json:"detail,omitempty"`
	Title            *string                       `json:"title,omitempty"`
	Type             string                        `json:"type"`
}
