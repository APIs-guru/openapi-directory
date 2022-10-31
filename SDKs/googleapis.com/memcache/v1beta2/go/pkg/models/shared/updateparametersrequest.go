package shared



type UpdateParametersRequest struct {
    Parameters *MemcacheParameters `json:"parameters,omitempty"`
    UpdateMask *string `json:"updateMask,omitempty"`
    
}

