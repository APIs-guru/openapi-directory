package shared

type Error405SbsAdditionalErrors struct {
	Code   MessageCode405SbsEnum `json:"code"`
	Detail *string               `json:"detail"`
	Title  *string               `json:"title"`
}

type Error405Sbs struct {
	Links            map[string]HrefType           `json:"_links"`
	AdditionalErrors []Error405SbsAdditionalErrors `json:"additionalErrors"`
	Code             MessageCode405SbsEnum         `json:"code"`
	Detail           *string                       `json:"detail"`
	Title            *string                       `json:"title"`
	Type             string                        `json:"type"`
}
