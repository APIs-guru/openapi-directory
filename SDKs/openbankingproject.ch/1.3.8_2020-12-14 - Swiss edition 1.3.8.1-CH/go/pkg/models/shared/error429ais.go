package shared

type Error429AisAdditionalErrors struct {
	Code   MessageCode429AisEnum `json:"code"`
	Detail *string               `json:"detail"`
	Title  *string               `json:"title"`
}

type Error429Ais struct {
	Links            map[string]HrefType           `json:"_links"`
	AdditionalErrors []Error429AisAdditionalErrors `json:"additionalErrors"`
	Code             MessageCode429AisEnum         `json:"code"`
	Detail           *string                       `json:"detail"`
	Title            *string                       `json:"title"`
	Type             string                        `json:"type"`
}
