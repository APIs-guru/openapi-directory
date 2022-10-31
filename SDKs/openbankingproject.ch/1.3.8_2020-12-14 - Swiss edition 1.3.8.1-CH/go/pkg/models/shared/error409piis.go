package shared

type Error409PiisAdditionalErrors struct {
	Code   MessageCode409PiisEnum `json:"code"`
	Detail *string                `json:"detail,omitempty"`
	Title  *string                `json:"title,omitempty"`
}

type Error409Piis struct {
	Links            map[string]HrefType            `json:"_links,omitempty"`
	AdditionalErrors []Error409PiisAdditionalErrors `json:"additionalErrors,omitempty"`
	Code             MessageCode409PiisEnum         `json:"code"`
	Detail           *string                        `json:"detail,omitempty"`
	Title            *string                        `json:"title,omitempty"`
	Type             string                         `json:"type"`
}
