package shared

type Error405PisAdditionalErrors struct {
	Code   MessageCode405PisEnum `json:"code"`
	Detail *string               `json:"detail"`
	Title  *string               `json:"title"`
}

type Error405Pis struct {
	Links            map[string]HrefType           `json:"_links"`
	AdditionalErrors []Error405PisAdditionalErrors `json:"additionalErrors"`
	Code             MessageCode405PisEnum         `json:"code"`
	Detail           *string                       `json:"detail"`
	Title            *string                       `json:"title"`
	Type             string                        `json:"type"`
}
