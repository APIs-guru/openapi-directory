package shared



type FacetBucket struct {
    Count *int32 `json:"count,omitempty"`
    Percentage *int32 `json:"percentage,omitempty"`
    Value *Value `json:"value,omitempty"`
    
}

