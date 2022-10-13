package shared

type Error400AisAdditionalErrors struct {
	Code   MessageCode400AisEnum `json:"code"`
	Detail *string               `json:"detail"`
	Title  *string               `json:"title"`
}

type Error400Ais struct {
	Links            map[string]HrefType           `json:"_links"`
	AdditionalErrors []Error400AisAdditionalErrors `json:"additionalErrors"`
	Code             MessageCode400AisEnum         `json:"code"`
	Detail           *string                       `json:"detail"`
	Title            *string                       `json:"title"`
	Type             string                        `json:"type"`
}
