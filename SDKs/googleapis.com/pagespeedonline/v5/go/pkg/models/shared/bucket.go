package shared



type Bucket struct {
    Max *int32 `json:"max,omitempty"`
    Min *int32 `json:"min,omitempty"`
    Proportion *float64 `json:"proportion,omitempty"`
    
}

