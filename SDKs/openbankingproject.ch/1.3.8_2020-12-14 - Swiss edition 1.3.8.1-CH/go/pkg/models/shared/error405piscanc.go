package shared

// Error405PisCancAdditionalErrors
// This is a data element to support the declaration of additional errors in the context of [RFC7807].
type Error405PisCancAdditionalErrors struct {
	Code   MessageCode405PisCancEnum `json:"code"`
	Detail *string                   `json:"detail,omitempty"`
	Title  *string                   `json:"title,omitempty"`
}

// Error405PisCanc
// Standardised definition of reporting error information according to [RFC7807]
// in case of a HTTP error code 405 for a pament cancelation (PIS).
type Error405PisCanc struct {
	Links            map[string]HrefType               `json:"_links,omitempty"`
	AdditionalErrors []Error405PisCancAdditionalErrors `json:"additionalErrors,omitempty"`
	Code             MessageCode405PisCancEnum         `json:"code"`
	Detail           *string                           `json:"detail,omitempty"`
	Title            *string                           `json:"title,omitempty"`
	Type             string                            `json:"type"`
}
