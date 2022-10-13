package shared

type Error401PiisAdditionalErrors struct {
	Code   MessageCode401PiisEnum `json:"code"`
	Detail *string                `json:"detail"`
	Title  *string                `json:"title"`
}

type Error401Piis struct {
	Links            map[string]HrefType            `json:"_links"`
	AdditionalErrors []Error401PiisAdditionalErrors `json:"additionalErrors"`
	Code             MessageCode401PisEnum          `json:"code"`
	Detail           *string                        `json:"detail"`
	Title            *string                        `json:"title"`
	Type             string                         `json:"type"`
}
