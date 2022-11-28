package shared

// Error404PiisAdditionalErrors
// This is a data element to support the declaration of additional errors in the context of [RFC7807].
type Error404PiisAdditionalErrors struct {
	Code   MessageCode404PiisEnum `json:"code"`
	Detail *string                `json:"detail,omitempty"`
	Title  *string                `json:"title,omitempty"`
}

// Error404Piis
// Standardised definition of reporting error information according to [RFC7807]
// in case of a HTTP error code 404 for PIIS.
type Error404Piis struct {
	Links            map[string]HrefType            `json:"_links,omitempty"`
	AdditionalErrors []Error404PiisAdditionalErrors `json:"additionalErrors,omitempty"`
	Code             MessageCode404PiisEnum         `json:"code"`
	Detail           *string                        `json:"detail,omitempty"`
	Title            *string                        `json:"title,omitempty"`
	Type             string                         `json:"type"`
}
