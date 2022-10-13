package shared

type Error409PiisAdditionalErrors struct {
	Code   MessageCode409PiisEnum `json:"code"`
	Detail *string                `json:"detail"`
	Title  *string                `json:"title"`
}

type Error409Piis struct {
	Links            map[string]HrefType            `json:"_links"`
	AdditionalErrors []Error409PiisAdditionalErrors `json:"additionalErrors"`
	Code             MessageCode409PiisEnum         `json:"code"`
	Detail           *string                        `json:"detail"`
	Title            *string                        `json:"title"`
	Type             string                         `json:"type"`
}
