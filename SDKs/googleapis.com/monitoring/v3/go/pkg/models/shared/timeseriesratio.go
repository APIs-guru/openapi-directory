package shared



type TimeSeriesRatio struct {
    BadServiceFilter *string `json:"badServiceFilter,omitempty"`
    GoodServiceFilter *string `json:"goodServiceFilter,omitempty"`
    TotalServiceFilter *string `json:"totalServiceFilter,omitempty"`
    
}

