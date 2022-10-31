package shared



type RegionProposal struct {
    BoundingBox *BoundingBox `json:"boundingBox,omitempty"`
    Confidence *float32 `json:"confidence,omitempty"`
    
}

