package shared



type Error401AisAdditionalErrors struct {
    Code MessageCode401AisEnum `json:"code"`
    Detail *string `json:"detail,omitempty"`
    Title *string `json:"title,omitempty"`
    
}

type Error401Ais struct {
    Links map[string]HrefType `json:"_links,omitempty"`
    AdditionalErrors []Error401AisAdditionalErrors `json:"additionalErrors,omitempty"`
    Code MessageCode401AisEnum `json:"code"`
    Detail *string `json:"detail,omitempty"`
    Title *string `json:"title,omitempty"`
    Type string `json:"type"`
    
}

