package shared



type ResponseProfile struct {
    AudioCodec *string `json:"AudioCodec,omitempty"`
    Conditions []ProfileCondition `json:"Conditions,omitempty"`
    Container *string `json:"Container,omitempty"`
    MimeType *string `json:"MimeType,omitempty"`
    OrgPn *string `json:"OrgPn,omitempty"`
    Type *DlnaProfileTypeEnum `json:"Type,omitempty"`
    VideoCodec *string `json:"VideoCodec,omitempty"`
    
}

