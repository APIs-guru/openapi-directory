package shared

type Error409PisAdditionalErrors struct {
	Code   MessageCode409PisEnum `json:"code"`
	Detail *string               `json:"detail"`
	Title  *string               `json:"title"`
}

type Error409Pis struct {
	Links            map[string]HrefType           `json:"_links"`
	AdditionalErrors []Error409PisAdditionalErrors `json:"additionalErrors"`
	Code             MessageCode409PisEnum         `json:"code"`
	Detail           *string                       `json:"detail"`
	Title            *string                       `json:"title"`
	Type             string                        `json:"type"`
}
