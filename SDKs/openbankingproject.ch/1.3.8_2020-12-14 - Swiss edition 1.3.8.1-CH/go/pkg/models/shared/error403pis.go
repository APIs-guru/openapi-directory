package shared



type Error403PisAdditionalErrors struct {
    Code MessageCode403PisEnum `json:"code"`
    Detail *string `json:"detail,omitempty"`
    Title *string `json:"title,omitempty"`
    
}

type Error403Pis struct {
    Links map[string]HrefType `json:"_links,omitempty"`
    AdditionalErrors []Error403PisAdditionalErrors `json:"additionalErrors,omitempty"`
    Code MessageCode403PisEnum `json:"code"`
    Detail *string `json:"detail,omitempty"`
    Title *string `json:"title,omitempty"`
    Type string `json:"type"`
    
}

