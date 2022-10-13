package shared

type Error404AisAdditionalErrors struct {
	Code   MessageCode404AisEnum `json:"code"`
	Detail *string               `json:"detail"`
	Title  *string               `json:"title"`
}

type Error404Ais struct {
	Links            map[string]HrefType           `json:"_links"`
	AdditionalErrors []Error404AisAdditionalErrors `json:"additionalErrors"`
	Code             MessageCode404AisEnum         `json:"code"`
	Detail           *string                       `json:"detail"`
	Title            *string                       `json:"title"`
	Type             string                        `json:"type"`
}
