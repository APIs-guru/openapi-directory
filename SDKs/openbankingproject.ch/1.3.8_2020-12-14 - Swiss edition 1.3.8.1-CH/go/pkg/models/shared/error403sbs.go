package shared

// Error403SbsAdditionalErrors
// This is a data element to support the declaration of additional errors in the context of [RFC7807].
type Error403SbsAdditionalErrors struct {
	Code   MessageCode403SbsEnum `json:"code"`
	Detail *string               `json:"detail,omitempty"`
	Title  *string               `json:"title,omitempty"`
}

// Error403Sbs
// Standardised definition of reporting error information according to [RFC7807]
// in case of a HTTP error code 403 for signing baskets.
type Error403Sbs struct {
	Links            map[string]HrefType           `json:"_links,omitempty"`
	AdditionalErrors []Error403SbsAdditionalErrors `json:"additionalErrors,omitempty"`
	Code             MessageCode403SbsEnum         `json:"code"`
	Detail           *string                       `json:"detail,omitempty"`
	Title            *string                       `json:"title,omitempty"`
	Type             string                        `json:"type"`
}
