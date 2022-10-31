package shared



type Error409SbsAdditionalErrors struct {
    Code MessageCode409SbsEnum `json:"code"`
    Detail *string `json:"detail,omitempty"`
    Title *string `json:"title,omitempty"`
    
}

type Error409Sbs struct {
    Links map[string]HrefType `json:"_links,omitempty"`
    AdditionalErrors []Error409SbsAdditionalErrors `json:"additionalErrors,omitempty"`
    Code MessageCode409SbsEnum `json:"code"`
    Detail *string `json:"detail,omitempty"`
    Title *string `json:"title,omitempty"`
    Type string `json:"type"`
    
}

