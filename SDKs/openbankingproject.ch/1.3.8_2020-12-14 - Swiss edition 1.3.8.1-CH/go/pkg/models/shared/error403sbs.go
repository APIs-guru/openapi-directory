package shared

type Error403SbsAdditionalErrors struct {
	Code   MessageCode403SbsEnum `json:"code"`
	Detail *string               `json:"detail"`
	Title  *string               `json:"title"`
}

type Error403Sbs struct {
	Links            map[string]HrefType           `json:"_links"`
	AdditionalErrors []Error403SbsAdditionalErrors `json:"additionalErrors"`
	Code             MessageCode403SbsEnum         `json:"code"`
	Detail           *string                       `json:"detail"`
	Title            *string                       `json:"title"`
	Type             string                        `json:"type"`
}
