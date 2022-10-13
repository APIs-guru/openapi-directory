package shared

type Error400SbsAdditionalErrors struct {
	Code   MessageCode400SbsEnum `json:"code"`
	Detail *string               `json:"detail"`
	Title  *string               `json:"title"`
}

type Error400Sbs struct {
	Links            map[string]HrefType           `json:"_links"`
	AdditionalErrors []Error400SbsAdditionalErrors `json:"additionalErrors"`
	Code             MessageCode400SbsEnum         `json:"code"`
	Detail           *string                       `json:"detail"`
	Title            *string                       `json:"title"`
	Type             string                        `json:"type"`
}
