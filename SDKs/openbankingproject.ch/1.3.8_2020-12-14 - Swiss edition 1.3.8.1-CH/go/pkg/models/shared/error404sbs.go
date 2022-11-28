package shared

// Error404SbsAdditionalErrors
// This is a data element to support the declaration of additional errors in the context of [RFC7807].
type Error404SbsAdditionalErrors struct {
	Code   MessageCode404SbsEnum `json:"code"`
	Detail *string               `json:"detail,omitempty"`
	Title  *string               `json:"title,omitempty"`
}

// Error404Sbs
// Standardised definition of reporting error information according to [RFC7807]
// in case of a HTTP error code 404 for signing baskets.
type Error404Sbs struct {
	Links            map[string]HrefType           `json:"_links,omitempty"`
	AdditionalErrors []Error404SbsAdditionalErrors `json:"additionalErrors,omitempty"`
	Code             MessageCode404SbsEnum         `json:"code"`
	Detail           *string                       `json:"detail,omitempty"`
	Title            *string                       `json:"title,omitempty"`
	Type             string                        `json:"type"`
}
