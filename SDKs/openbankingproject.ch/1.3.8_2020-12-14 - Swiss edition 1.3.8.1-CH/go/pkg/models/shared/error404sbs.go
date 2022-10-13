package shared

type Error404SbsAdditionalErrors struct {
	Code   MessageCode404SbsEnum `json:"code"`
	Detail *string               `json:"detail"`
	Title  *string               `json:"title"`
}

type Error404Sbs struct {
	Links            map[string]HrefType           `json:"_links"`
	AdditionalErrors []Error404SbsAdditionalErrors `json:"additionalErrors"`
	Code             MessageCode404SbsEnum         `json:"code"`
	Detail           *string                       `json:"detail"`
	Title            *string                       `json:"title"`
	Type             string                        `json:"type"`
}
