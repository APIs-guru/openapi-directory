package shared

type Error409SbsAdditionalErrors struct {
	Code   MessageCode409SbsEnum `json:"code"`
	Detail *string               `json:"detail"`
	Title  *string               `json:"title"`
}

type Error409Sbs struct {
	Links            map[string]HrefType           `json:"_links"`
	AdditionalErrors []Error409SbsAdditionalErrors `json:"additionalErrors"`
	Code             MessageCode409SbsEnum         `json:"code"`
	Detail           *string                       `json:"detail"`
	Title            *string                       `json:"title"`
	Type             string                        `json:"type"`
}
