package shared

type Error405PisCancAdditionalErrors struct {
	Code   MessageCode405PisCancEnum `json:"code"`
	Detail *string                   `json:"detail"`
	Title  *string                   `json:"title"`
}

type Error405PisCanc struct {
	Links            map[string]HrefType               `json:"_links"`
	AdditionalErrors []Error405PisCancAdditionalErrors `json:"additionalErrors"`
	Code             MessageCode405PisCancEnum         `json:"code"`
	Detail           *string                           `json:"detail"`
	Title            *string                           `json:"title"`
	Type             string                            `json:"type"`
}
