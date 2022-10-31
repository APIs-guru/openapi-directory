package shared



type Error400AisAdditionalErrors struct {
    Code MessageCode400AisEnum `json:"code"`
    Detail *string `json:"detail,omitempty"`
    Title *string `json:"title,omitempty"`
    
}

type Error400Ais struct {
    Links map[string]HrefType `json:"_links,omitempty"`
    AdditionalErrors []Error400AisAdditionalErrors `json:"additionalErrors,omitempty"`
    Code MessageCode400AisEnum `json:"code"`
    Detail *string `json:"detail,omitempty"`
    Title *string `json:"title,omitempty"`
    Type string `json:"type"`
    
}

