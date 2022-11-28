package shared

// Error400SbsAdditionalErrors
// This is a data element to support the declaration of additional errors in the context of [RFC7807].
type Error400SbsAdditionalErrors struct {
	Code   MessageCode400SbsEnum `json:"code"`
	Detail *string               `json:"detail,omitempty"`
	Title  *string               `json:"title,omitempty"`
}

// Error400Sbs
// Standardised definition of reporting error information according to [RFC7807]
// in case of a HTTP error code 400 for signing baskets.
type Error400Sbs struct {
	Links            map[string]HrefType           `json:"_links,omitempty"`
	AdditionalErrors []Error400SbsAdditionalErrors `json:"additionalErrors,omitempty"`
	Code             MessageCode400SbsEnum         `json:"code"`
	Detail           *string                       `json:"detail,omitempty"`
	Title            *string                       `json:"title,omitempty"`
	Type             string                        `json:"type"`
}
