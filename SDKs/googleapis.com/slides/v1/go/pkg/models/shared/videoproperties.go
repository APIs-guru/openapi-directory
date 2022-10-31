package shared



type VideoProperties struct {
    AutoPlay *bool `json:"autoPlay,omitempty"`
    End *int64 `json:"end,omitempty"`
    Mute *bool `json:"mute,omitempty"`
    Outline *Outline `json:"outline,omitempty"`
    Start *int64 `json:"start,omitempty"`
    
}

