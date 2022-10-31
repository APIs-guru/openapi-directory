package shared



type Error401SbsAdditionalErrors struct {
    Code MessageCode401SbsEnum `json:"code"`
    Detail *string `json:"detail,omitempty"`
    Title *string `json:"title,omitempty"`
    
}

type Error401Sbs struct {
    Links map[string]HrefType `json:"_links,omitempty"`
    AdditionalErrors []Error401SbsAdditionalErrors `json:"additionalErrors,omitempty"`
    Code MessageCode401SbsEnum `json:"code"`
    Detail *string `json:"detail,omitempty"`
    Title *string `json:"title,omitempty"`
    Type string `json:"type"`
    
}

