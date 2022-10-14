package shared

type Error403SbsAdditionalErrors struct {
	Code   MessageCode403SbsEnum `json:"code"`
	Detail *string               `json:"detail,omitempty"`
	Title  *string               `json:"title,omitempty"`
}

type Error403Sbs struct {
	Links            map[string]HrefType           `json:"_links,omitempty"`
	AdditionalErrors []Error403SbsAdditionalErrors `json:"additionalErrors,omitempty"`
	Code             MessageCode403SbsEnum         `json:"code"`
	Detail           *string                       `json:"detail,omitempty"`
	Title            *string                       `json:"title,omitempty"`
	Type             string                        `json:"type"`
}
