package shared



type Release struct {
    Fraction *float64 `json:"fraction,omitempty"`
    FractionGroup *string `json:"fractionGroup,omitempty"`
    Name *string `json:"name,omitempty"`
    Serving *Interval `json:"serving,omitempty"`
    Version *string `json:"version,omitempty"`
    
}

