package shared

type Error401SbsAdditionalErrors struct {
	Code   MessageCode401SbsEnum `json:"code"`
	Detail *string               `json:"detail"`
	Title  *string               `json:"title"`
}

type Error401Sbs struct {
	Links            map[string]HrefType           `json:"_links"`
	AdditionalErrors []Error401SbsAdditionalErrors `json:"additionalErrors"`
	Code             MessageCode401SbsEnum         `json:"code"`
	Detail           *string                       `json:"detail"`
	Title            *string                       `json:"title"`
	Type             string                        `json:"type"`
}
