package shared

type Error400PisAdditionalErrors struct {
	Code   MessageCode400PisEnum `json:"code"`
	Detail *string               `json:"detail"`
	Title  *string               `json:"title"`
}

type Error400Pis struct {
	Links            map[string]HrefType           `json:"_links"`
	AdditionalErrors []Error400PisAdditionalErrors `json:"additionalErrors"`
	Code             MessageCode400PisEnum         `json:"code"`
	Detail           *string                       `json:"detail"`
	Title            *string                       `json:"title"`
	Type             string                        `json:"type"`
}
