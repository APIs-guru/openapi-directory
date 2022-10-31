package shared



type Error401PisAdditionalErrors struct {
    Code MessageCode401PisEnum `json:"code"`
    Detail *string `json:"detail,omitempty"`
    Title *string `json:"title,omitempty"`
    
}

type Error401Pis struct {
    Links map[string]HrefType `json:"_links,omitempty"`
    AdditionalErrors []Error401PisAdditionalErrors `json:"additionalErrors,omitempty"`
    Code MessageCode401PisEnum `json:"code"`
    Detail *string `json:"detail,omitempty"`
    Title *string `json:"title,omitempty"`
    Type string `json:"type"`
    
}

