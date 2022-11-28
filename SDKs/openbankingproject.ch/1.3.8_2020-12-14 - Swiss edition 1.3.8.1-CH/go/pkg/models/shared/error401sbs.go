package shared

// Error401SbsAdditionalErrors
// This is a data element to support the declaration of additional errors in the context of [RFC7807].
type Error401SbsAdditionalErrors struct {
	Code   MessageCode401SbsEnum `json:"code"`
	Detail *string               `json:"detail,omitempty"`
	Title  *string               `json:"title,omitempty"`
}

// Error401Sbs
// Standardised definition of reporting error information according to [RFC7807]
// in case of a HTTP error code 401 for signing baskets.
type Error401Sbs struct {
	Links            map[string]HrefType           `json:"_links,omitempty"`
	AdditionalErrors []Error401SbsAdditionalErrors `json:"additionalErrors,omitempty"`
	Code             MessageCode401SbsEnum         `json:"code"`
	Detail           *string                       `json:"detail,omitempty"`
	Title            *string                       `json:"title,omitempty"`
	Type             string                        `json:"type"`
}
