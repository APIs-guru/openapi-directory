package shared

type Error404AisAdditionalErrors struct {
	Code   MessageCode404AisEnum `json:"code"`
	Detail *string               `json:"detail,omitempty"`
	Title  *string               `json:"title,omitempty"`
}

type Error404Ais struct {
	Links            map[string]HrefType           `json:"_links,omitempty"`
	AdditionalErrors []Error404AisAdditionalErrors `json:"additionalErrors,omitempty"`
	Code             MessageCode404AisEnum         `json:"code"`
	Detail           *string                       `json:"detail,omitempty"`
	Title            *string                       `json:"title,omitempty"`
	Type             string                        `json:"type"`
}
