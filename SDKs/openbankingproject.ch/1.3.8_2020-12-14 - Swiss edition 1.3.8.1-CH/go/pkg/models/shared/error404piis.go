package shared

type Error404PiisAdditionalErrors struct {
	Code   MessageCode404PiisEnum `json:"code"`
	Detail *string                `json:"detail"`
	Title  *string                `json:"title"`
}

type Error404Piis struct {
	Links            map[string]HrefType            `json:"_links"`
	AdditionalErrors []Error404PiisAdditionalErrors `json:"additionalErrors"`
	Code             MessageCode404PiisEnum         `json:"code"`
	Detail           *string                        `json:"detail"`
	Title            *string                        `json:"title"`
	Type             string                         `json:"type"`
}
