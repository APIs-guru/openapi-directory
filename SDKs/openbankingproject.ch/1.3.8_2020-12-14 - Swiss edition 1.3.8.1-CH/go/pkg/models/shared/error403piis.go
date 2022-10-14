package shared

type Error403PiisAdditionalErrors struct {
	Code   MessageCode403PiisEnum `json:"code"`
	Detail *string                `json:"detail,omitempty"`
	Title  *string                `json:"title,omitempty"`
}

type Error403Piis struct {
	Links            map[string]HrefType            `json:"_links,omitempty"`
	AdditionalErrors []Error403PiisAdditionalErrors `json:"additionalErrors,omitempty"`
	Code             MessageCode403PiisEnum         `json:"code"`
	Detail           *string                        `json:"detail,omitempty"`
	Title            *string                        `json:"title,omitempty"`
	Type             string                         `json:"type"`
}
