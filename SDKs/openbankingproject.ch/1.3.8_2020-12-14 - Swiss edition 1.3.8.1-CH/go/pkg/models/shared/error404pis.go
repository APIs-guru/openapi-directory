package shared

type Error404PisAdditionalErrors struct {
	Code   MessageCode404PisEnum `json:"code"`
	Detail *string               `json:"detail"`
	Title  *string               `json:"title"`
}

type Error404Pis struct {
	Links            map[string]HrefType           `json:"_links"`
	AdditionalErrors []Error404PisAdditionalErrors `json:"additionalErrors"`
	Code             MessageCode404PisEnum         `json:"code"`
	Detail           *string                       `json:"detail"`
	Title            *string                       `json:"title"`
	Type             string                        `json:"type"`
}
