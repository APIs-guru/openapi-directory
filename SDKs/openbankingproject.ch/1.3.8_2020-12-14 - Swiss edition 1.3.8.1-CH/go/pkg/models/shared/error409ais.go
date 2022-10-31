package shared



type Error409AisAdditionalErrors struct {
    Code MessageCode409AisEnum `json:"code"`
    Detail *string `json:"detail,omitempty"`
    Title *string `json:"title,omitempty"`
    
}

type Error409Ais struct {
    Links map[string]HrefType `json:"_links,omitempty"`
    AdditionalErrors []Error409AisAdditionalErrors `json:"additionalErrors,omitempty"`
    Code MessageCode409AisEnum `json:"code"`
    Detail *string `json:"detail,omitempty"`
    Title *string `json:"title,omitempty"`
    Type string `json:"type"`
    
}

