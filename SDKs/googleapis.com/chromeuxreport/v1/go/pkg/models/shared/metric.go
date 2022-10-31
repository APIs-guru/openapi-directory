package shared



type Metric struct {
    Histogram []Bin `json:"histogram,omitempty"`
    Percentiles *Percentiles `json:"percentiles,omitempty"`
    
}

