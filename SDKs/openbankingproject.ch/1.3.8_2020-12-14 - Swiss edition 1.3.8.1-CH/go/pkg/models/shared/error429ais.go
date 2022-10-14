package shared

type Error429AisAdditionalErrors struct {
	Code   MessageCode429AisEnum `json:"code"`
	Detail *string               `json:"detail,omitempty"`
	Title  *string               `json:"title,omitempty"`
}

type Error429Ais struct {
	Links            map[string]HrefType           `json:"_links,omitempty"`
	AdditionalErrors []Error429AisAdditionalErrors `json:"additionalErrors,omitempty"`
	Code             MessageCode429AisEnum         `json:"code"`
	Detail           *string                       `json:"detail,omitempty"`
	Title            *string                       `json:"title,omitempty"`
	Type             string                        `json:"type"`
}
