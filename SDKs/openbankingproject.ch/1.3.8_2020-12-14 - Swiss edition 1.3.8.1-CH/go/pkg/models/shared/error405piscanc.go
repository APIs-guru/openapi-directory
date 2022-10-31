package shared



type Error405PisCancAdditionalErrors struct {
    Code MessageCode405PisCancEnum `json:"code"`
    Detail *string `json:"detail,omitempty"`
    Title *string `json:"title,omitempty"`
    
}

type Error405PisCanc struct {
    Links map[string]HrefType `json:"_links,omitempty"`
    AdditionalErrors []Error405PisCancAdditionalErrors `json:"additionalErrors,omitempty"`
    Code MessageCode405PisCancEnum `json:"code"`
    Detail *string `json:"detail,omitempty"`
    Title *string `json:"title,omitempty"`
    Type string `json:"type"`
    
}

