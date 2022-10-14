package shared

type Error400PisAdditionalErrors struct {
	Code   MessageCode400PisEnum `json:"code"`
	Detail *string               `json:"detail,omitempty"`
	Title  *string               `json:"title,omitempty"`
}

type Error400Pis struct {
	Links            map[string]HrefType           `json:"_links,omitempty"`
	AdditionalErrors []Error400PisAdditionalErrors `json:"additionalErrors,omitempty"`
	Code             MessageCode400PisEnum         `json:"code"`
	Detail           *string                       `json:"detail,omitempty"`
	Title            *string                       `json:"title,omitempty"`
	Type             string                        `json:"type"`
}
