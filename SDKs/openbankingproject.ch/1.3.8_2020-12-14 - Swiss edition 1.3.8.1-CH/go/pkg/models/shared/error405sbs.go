package shared

// Error405SbsAdditionalErrors
// This is a data element to support the declaration of additional errors in the context of [RFC7807].
type Error405SbsAdditionalErrors struct {
	Code   MessageCode405SbsEnum `json:"code"`
	Detail *string               `json:"detail,omitempty"`
	Title  *string               `json:"title,omitempty"`
}

// Error405Sbs
// Standardised definition of reporting error information according to [RFC7807]
// in case of a HTTP error code 405 for signing baskets.
type Error405Sbs struct {
	Links            map[string]HrefType           `json:"_links,omitempty"`
	AdditionalErrors []Error405SbsAdditionalErrors `json:"additionalErrors,omitempty"`
	Code             MessageCode405SbsEnum         `json:"code"`
	Detail           *string                       `json:"detail,omitempty"`
	Title            *string                       `json:"title,omitempty"`
	Type             string                        `json:"type"`
}
