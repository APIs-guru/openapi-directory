package shared



type Error403AisAdditionalErrors struct {
    Code MessageCode403AisEnum `json:"code"`
    Detail *string `json:"detail,omitempty"`
    Title *string `json:"title,omitempty"`
    
}

type Error403Ais struct {
    Links map[string]HrefType `json:"_links,omitempty"`
    AdditionalErrors []Error403AisAdditionalErrors `json:"additionalErrors,omitempty"`
    Code MessageCode403AisEnum `json:"code"`
    Detail *string `json:"detail,omitempty"`
    Title *string `json:"title,omitempty"`
    Type string `json:"type"`
    
}

