package shared



type Segment struct {
    Fields map[string]string `json:"fields,omitempty"`
    SegmentID *string `json:"segmentId,omitempty"`
    SetID *string `json:"setId,omitempty"`
    
}

