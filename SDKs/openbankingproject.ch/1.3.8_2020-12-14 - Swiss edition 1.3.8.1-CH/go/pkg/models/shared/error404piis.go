package shared



type Error404PiisAdditionalErrors struct {
    Code MessageCode404PiisEnum `json:"code"`
    Detail *string `json:"detail,omitempty"`
    Title *string `json:"title,omitempty"`
    
}

type Error404Piis struct {
    Links map[string]HrefType `json:"_links,omitempty"`
    AdditionalErrors []Error404PiisAdditionalErrors `json:"additionalErrors,omitempty"`
    Code MessageCode404PiisEnum `json:"code"`
    Detail *string `json:"detail,omitempty"`
    Title *string `json:"title,omitempty"`
    Type string `json:"type"`
    
}

