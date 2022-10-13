package shared

type Error403AisAdditionalErrors struct {
	Code   MessageCode403AisEnum `json:"code"`
	Detail *string               `json:"detail"`
	Title  *string               `json:"title"`
}

type Error403Ais struct {
	Links            map[string]HrefType           `json:"_links"`
	AdditionalErrors []Error403AisAdditionalErrors `json:"additionalErrors"`
	Code             MessageCode403AisEnum         `json:"code"`
	Detail           *string                       `json:"detail"`
	Title            *string                       `json:"title"`
	Type             string                        `json:"type"`
}
