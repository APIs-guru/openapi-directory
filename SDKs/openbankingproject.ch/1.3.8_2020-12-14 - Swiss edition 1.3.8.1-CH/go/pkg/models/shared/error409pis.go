package shared



type Error409PisAdditionalErrors struct {
    Code MessageCode409PisEnum `json:"code"`
    Detail *string `json:"detail,omitempty"`
    Title *string `json:"title,omitempty"`
    
}

type Error409Pis struct {
    Links map[string]HrefType `json:"_links,omitempty"`
    AdditionalErrors []Error409PisAdditionalErrors `json:"additionalErrors,omitempty"`
    Code MessageCode409PisEnum `json:"code"`
    Detail *string `json:"detail,omitempty"`
    Title *string `json:"title,omitempty"`
    Type string `json:"type"`
    
}

