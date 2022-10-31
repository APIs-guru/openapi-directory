package shared



type UpdateProtectedRangeRequest struct {
    Fields *string `json:"fields,omitempty"`
    ProtectedRange *ProtectedRange `json:"protectedRange,omitempty"`
    
}

