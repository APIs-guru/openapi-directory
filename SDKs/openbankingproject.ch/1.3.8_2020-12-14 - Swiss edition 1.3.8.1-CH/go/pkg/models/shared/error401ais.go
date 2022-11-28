package shared

// Error401AisAdditionalErrors
// This is a data element to support the declaration of additional errors in the context of [RFC7807].
type Error401AisAdditionalErrors struct {
	Code   MessageCode401AisEnum `json:"code"`
	Detail *string               `json:"detail,omitempty"`
	Title  *string               `json:"title,omitempty"`
}

// Error401Ais
// Standardised definition of reporting error information according to [RFC7807]
// in case of a HTTP error code 401 for AIS.
type Error401Ais struct {
	Links            map[string]HrefType           `json:"_links,omitempty"`
	AdditionalErrors []Error401AisAdditionalErrors `json:"additionalErrors,omitempty"`
	Code             MessageCode401AisEnum         `json:"code"`
	Detail           *string                       `json:"detail,omitempty"`
	Title            *string                       `json:"title,omitempty"`
	Type             string                        `json:"type"`
}
