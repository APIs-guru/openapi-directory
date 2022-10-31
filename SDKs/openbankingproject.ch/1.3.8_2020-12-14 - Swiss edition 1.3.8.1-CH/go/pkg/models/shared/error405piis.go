package shared

type Error405PiisAdditionalErrors struct {
	Code   MessageCode405PiisEnum `json:"code"`
	Detail *string                `json:"detail,omitempty"`
	Title  *string                `json:"title,omitempty"`
}

type Error405Piis struct {
	Links            map[string]HrefType            `json:"_links,omitempty"`
	AdditionalErrors []Error405PiisAdditionalErrors `json:"additionalErrors,omitempty"`
	Code             MessageCode405PiisEnum         `json:"code"`
	Detail           *string                        `json:"detail,omitempty"`
	Title            *string                        `json:"title,omitempty"`
	Type             string                         `json:"type"`
}
