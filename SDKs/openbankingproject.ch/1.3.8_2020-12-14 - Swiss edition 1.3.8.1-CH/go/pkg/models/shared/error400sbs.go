package shared

type Error400SbsAdditionalErrors struct {
	Code   MessageCode400SbsEnum `json:"code"`
	Detail *string               `json:"detail,omitempty"`
	Title  *string               `json:"title,omitempty"`
}

type Error400Sbs struct {
	Links            map[string]HrefType           `json:"_links,omitempty"`
	AdditionalErrors []Error400SbsAdditionalErrors `json:"additionalErrors,omitempty"`
	Code             MessageCode400SbsEnum         `json:"code"`
	Detail           *string                       `json:"detail,omitempty"`
	Title            *string                       `json:"title,omitempty"`
	Type             string                        `json:"type"`
}
