package shared



type DirectPlayProfile struct {
    AudioCodec *string `json:"AudioCodec,omitempty"`
    Container *string `json:"Container,omitempty"`
    Type *DlnaProfileTypeEnum `json:"Type,omitempty"`
    VideoCodec *string `json:"VideoCodec,omitempty"`
    
}

