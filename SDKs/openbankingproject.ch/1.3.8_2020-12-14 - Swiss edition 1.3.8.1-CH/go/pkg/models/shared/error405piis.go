package shared

// Error405PiisAdditionalErrors
// This is a data element to support the declaration of additional errors in the context of [RFC7807].
type Error405PiisAdditionalErrors struct {
	Code   MessageCode405PiisEnum `json:"code"`
	Detail *string                `json:"detail,omitempty"`
	Title  *string                `json:"title,omitempty"`
}

// Error405Piis
// Standardised definition of reporting error information according to [RFC7807]
// in case of a HTTP error code 405 for PIIS.
type Error405Piis struct {
	Links            map[string]HrefType            `json:"_links,omitempty"`
	AdditionalErrors []Error405PiisAdditionalErrors `json:"additionalErrors,omitempty"`
	Code             MessageCode405PiisEnum         `json:"code"`
	Detail           *string                        `json:"detail,omitempty"`
	Title            *string                        `json:"title,omitempty"`
	Type             string                         `json:"type"`
}
