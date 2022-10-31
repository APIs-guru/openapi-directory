package shared



type CompensationRange struct {
    MaxCompensation *Money `json:"maxCompensation,omitempty"`
    MinCompensation *Money `json:"minCompensation,omitempty"`
    
}

