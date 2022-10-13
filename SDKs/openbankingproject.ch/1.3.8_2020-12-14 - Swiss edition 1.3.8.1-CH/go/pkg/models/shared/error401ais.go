package shared

type Error401AisAdditionalErrors struct {
	Code   MessageCode401AisEnum `json:"code"`
	Detail *string               `json:"detail"`
	Title  *string               `json:"title"`
}

type Error401Ais struct {
	Links            map[string]HrefType           `json:"_links"`
	AdditionalErrors []Error401AisAdditionalErrors `json:"additionalErrors"`
	Code             MessageCode401AisEnum         `json:"code"`
	Detail           *string                       `json:"detail"`
	Title            *string                       `json:"title"`
	Type             string                        `json:"type"`
}
