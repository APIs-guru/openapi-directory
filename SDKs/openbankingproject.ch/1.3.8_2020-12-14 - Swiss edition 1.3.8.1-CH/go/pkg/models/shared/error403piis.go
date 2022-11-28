package shared

// Error403PiisAdditionalErrors
// This is a data element to support the declaration of additional errors in the context of [RFC7807].
type Error403PiisAdditionalErrors struct {
	Code   MessageCode403PiisEnum `json:"code"`
	Detail *string                `json:"detail,omitempty"`
	Title  *string                `json:"title,omitempty"`
}

// Error403Piis
// Standardised definition of reporting error information according to [RFC7807]
// in case of a HTTP error code 403 for PIIS.
type Error403Piis struct {
	Links            map[string]HrefType            `json:"_links,omitempty"`
	AdditionalErrors []Error403PiisAdditionalErrors `json:"additionalErrors,omitempty"`
	Code             MessageCode403PiisEnum         `json:"code"`
	Detail           *string                        `json:"detail,omitempty"`
	Title            *string                        `json:"title,omitempty"`
	Type             string                         `json:"type"`
}
