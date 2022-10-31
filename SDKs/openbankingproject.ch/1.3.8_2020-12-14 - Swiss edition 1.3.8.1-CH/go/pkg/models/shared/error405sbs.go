package shared



type Error405SbsAdditionalErrors struct {
    Code MessageCode405SbsEnum `json:"code"`
    Detail *string `json:"detail,omitempty"`
    Title *string `json:"title,omitempty"`
    
}

type Error405Sbs struct {
    Links map[string]HrefType `json:"_links,omitempty"`
    AdditionalErrors []Error405SbsAdditionalErrors `json:"additionalErrors,omitempty"`
    Code MessageCode405SbsEnum `json:"code"`
    Detail *string `json:"detail,omitempty"`
    Title *string `json:"title,omitempty"`
    Type string `json:"type"`
    
}

