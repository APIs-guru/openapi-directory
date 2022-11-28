package shared

// Error401PiisAdditionalErrors
// This is a data element to support the declaration of additional errors in the context of [RFC7807].
type Error401PiisAdditionalErrors struct {
	Code   MessageCode401PiisEnum `json:"code"`
	Detail *string                `json:"detail,omitempty"`
	Title  *string                `json:"title,omitempty"`
}

// Error401Piis
// Standardised definition of reporting error information according to [RFC7807]
// in case of a HTTP error code 401 for PIIS.
type Error401Piis struct {
	Links            map[string]HrefType            `json:"_links,omitempty"`
	AdditionalErrors []Error401PiisAdditionalErrors `json:"additionalErrors,omitempty"`
	Code             MessageCode401PisEnum          `json:"code"`
	Detail           *string                        `json:"detail,omitempty"`
	Title            *string                        `json:"title,omitempty"`
	Type             string                         `json:"type"`
}
