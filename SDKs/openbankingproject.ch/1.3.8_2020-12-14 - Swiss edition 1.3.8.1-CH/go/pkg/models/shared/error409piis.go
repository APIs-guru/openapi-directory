package shared

// Error409PiisAdditionalErrors
// This is a data element to support the declaration of additional errors in the context of [RFC7807].
type Error409PiisAdditionalErrors struct {
	Code   MessageCode409PiisEnum `json:"code"`
	Detail *string                `json:"detail,omitempty"`
	Title  *string                `json:"title,omitempty"`
}

// Error409Piis
// Standardised definition of reporting error information according to [RFC7807]
// in case of a HTTP error code 409 for PIIS.
type Error409Piis struct {
	Links            map[string]HrefType            `json:"_links,omitempty"`
	AdditionalErrors []Error409PiisAdditionalErrors `json:"additionalErrors,omitempty"`
	Code             MessageCode409PiisEnum         `json:"code"`
	Detail           *string                        `json:"detail,omitempty"`
	Title            *string                        `json:"title,omitempty"`
	Type             string                         `json:"type"`
}
