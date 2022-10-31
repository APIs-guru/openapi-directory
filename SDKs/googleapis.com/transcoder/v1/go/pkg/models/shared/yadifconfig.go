package shared



type YadifConfig struct {
    DeinterlaceAllFrames *bool `json:"deinterlaceAllFrames,omitempty"`
    DisableSpatialInterlacing *bool `json:"disableSpatialInterlacing,omitempty"`
    Mode *string `json:"mode,omitempty"`
    Parity *string `json:"parity,omitempty"`
    
}

