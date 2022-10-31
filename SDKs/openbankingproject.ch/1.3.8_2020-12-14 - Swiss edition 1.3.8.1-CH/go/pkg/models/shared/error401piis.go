package shared

type Error401PiisAdditionalErrors struct {
	Code   MessageCode401PiisEnum `json:"code"`
	Detail *string                `json:"detail,omitempty"`
	Title  *string                `json:"title,omitempty"`
}

type Error401Piis struct {
	Links            map[string]HrefType            `json:"_links,omitempty"`
	AdditionalErrors []Error401PiisAdditionalErrors `json:"additionalErrors,omitempty"`
	Code             MessageCode401PisEnum          `json:"code"`
	Detail           *string                        `json:"detail,omitempty"`
	Title            *string                        `json:"title,omitempty"`
	Type             string                         `json:"type"`
}
