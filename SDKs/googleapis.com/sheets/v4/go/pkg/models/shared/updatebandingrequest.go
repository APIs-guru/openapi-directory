package shared



type UpdateBandingRequest struct {
    BandedRange *BandedRange `json:"bandedRange,omitempty"`
    Fields *string `json:"fields,omitempty"`
    
}

