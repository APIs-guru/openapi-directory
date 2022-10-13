package shared

type Error406AisAdditionalErrors struct {
	Code   MessageCode406AisEnum `json:"code"`
	Detail *string               `json:"detail"`
	Title  *string               `json:"title"`
}

type Error406Ais struct {
	Links            map[string]HrefType           `json:"_links"`
	AdditionalErrors []Error406AisAdditionalErrors `json:"additionalErrors"`
	Code             MessageCode406AisEnum         `json:"code"`
	Detail           *string                       `json:"detail"`
	Title            *string                       `json:"title"`
	Type             string                        `json:"type"`
}
