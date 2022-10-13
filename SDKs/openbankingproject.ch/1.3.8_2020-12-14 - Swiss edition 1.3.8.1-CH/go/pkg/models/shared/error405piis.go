package shared

type Error405PiisAdditionalErrors struct {
	Code   MessageCode405PiisEnum `json:"code"`
	Detail *string                `json:"detail"`
	Title  *string                `json:"title"`
}

type Error405Piis struct {
	Links            map[string]HrefType            `json:"_links"`
	AdditionalErrors []Error405PiisAdditionalErrors `json:"additionalErrors"`
	Code             MessageCode405PiisEnum         `json:"code"`
	Detail           *string                        `json:"detail"`
	Title            *string                        `json:"title"`
	Type             string                         `json:"type"`
}
