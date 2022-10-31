package shared



type TemporalAsset struct {
    Asset *Asset `json:"asset,omitempty"`
    Deleted *bool `json:"deleted,omitempty"`
    Window *TimeWindow `json:"window,omitempty"`
    
}

