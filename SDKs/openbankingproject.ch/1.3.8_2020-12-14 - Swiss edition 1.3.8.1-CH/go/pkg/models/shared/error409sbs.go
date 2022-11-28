package shared

// Error409SbsAdditionalErrors
// This is a data element to support the declaration of additional errors in the context of [RFC7807].
type Error409SbsAdditionalErrors struct {
	Code   MessageCode409SbsEnum `json:"code"`
	Detail *string               `json:"detail,omitempty"`
	Title  *string               `json:"title,omitempty"`
}

// Error409Sbs
// Standardised definition of reporting error information according to [RFC7807]
// in case of a HTTP error code 409 for signing baskets.
type Error409Sbs struct {
	Links            map[string]HrefType           `json:"_links,omitempty"`
	AdditionalErrors []Error409SbsAdditionalErrors `json:"additionalErrors,omitempty"`
	Code             MessageCode409SbsEnum         `json:"code"`
	Detail           *string                       `json:"detail,omitempty"`
	Title            *string                       `json:"title,omitempty"`
	Type             string                        `json:"type"`
}
