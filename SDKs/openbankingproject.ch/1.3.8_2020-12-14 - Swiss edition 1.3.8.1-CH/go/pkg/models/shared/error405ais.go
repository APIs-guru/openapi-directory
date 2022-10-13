package shared

type Error405AisAdditionalErrors struct {
	Code   MessageCode405AisEnum `json:"code"`
	Detail *string               `json:"detail"`
	Title  *string               `json:"title"`
}

type Error405Ais struct {
	Links            map[string]HrefType           `json:"_links"`
	AdditionalErrors []Error405AisAdditionalErrors `json:"additionalErrors"`
	Code             MessageCode405AisEnum         `json:"code"`
	Detail           *string                       `json:"detail"`
	Title            *string                       `json:"title"`
	Type             string                        `json:"type"`
}
