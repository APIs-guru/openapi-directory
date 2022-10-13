package shared

type Error403PisAdditionalErrors struct {
	Code   MessageCode403PisEnum `json:"code"`
	Detail *string               `json:"detail"`
	Title  *string               `json:"title"`
}

type Error403Pis struct {
	Links            map[string]HrefType           `json:"_links"`
	AdditionalErrors []Error403PisAdditionalErrors `json:"additionalErrors"`
	Code             MessageCode403PisEnum         `json:"code"`
	Detail           *string                       `json:"detail"`
	Title            *string                       `json:"title"`
	Type             string                        `json:"type"`
}
