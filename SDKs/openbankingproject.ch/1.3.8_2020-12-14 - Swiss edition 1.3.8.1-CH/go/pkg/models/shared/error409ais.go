package shared

type Error409AisAdditionalErrors struct {
	Code   MessageCode409AisEnum `json:"code"`
	Detail *string               `json:"detail"`
	Title  *string               `json:"title"`
}

type Error409Ais struct {
	Links            map[string]HrefType           `json:"_links"`
	AdditionalErrors []Error409AisAdditionalErrors `json:"additionalErrors"`
	Code             MessageCode409AisEnum         `json:"code"`
	Detail           *string                       `json:"detail"`
	Title            *string                       `json:"title"`
	Type             string                        `json:"type"`
}
