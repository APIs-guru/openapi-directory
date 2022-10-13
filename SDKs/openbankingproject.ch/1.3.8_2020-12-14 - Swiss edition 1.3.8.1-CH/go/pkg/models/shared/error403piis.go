package shared

type Error403PiisAdditionalErrors struct {
	Code   MessageCode403PiisEnum `json:"code"`
	Detail *string                `json:"detail"`
	Title  *string                `json:"title"`
}

type Error403Piis struct {
	Links            map[string]HrefType            `json:"_links"`
	AdditionalErrors []Error403PiisAdditionalErrors `json:"additionalErrors"`
	Code             MessageCode403PiisEnum         `json:"code"`
	Detail           *string                        `json:"detail"`
	Title            *string                        `json:"title"`
	Type             string                         `json:"type"`
}
