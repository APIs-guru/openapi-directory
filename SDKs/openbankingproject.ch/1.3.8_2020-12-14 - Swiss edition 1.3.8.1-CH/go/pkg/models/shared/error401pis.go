package shared

type Error401PisAdditionalErrors struct {
	Code   MessageCode401PisEnum `json:"code"`
	Detail *string               `json:"detail"`
	Title  *string               `json:"title"`
}

type Error401Pis struct {
	Links            map[string]HrefType           `json:"_links"`
	AdditionalErrors []Error401PisAdditionalErrors `json:"additionalErrors"`
	Code             MessageCode401PisEnum         `json:"code"`
	Detail           *string                       `json:"detail"`
	Title            *string                       `json:"title"`
	Type             string                        `json:"type"`
}
