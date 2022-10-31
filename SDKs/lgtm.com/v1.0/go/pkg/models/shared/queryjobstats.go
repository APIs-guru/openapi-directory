package shared



type QueryjobStats struct {
    Failed *int32 `json:"failed,omitempty"`
    Pending *int32 `json:"pending,omitempty"`
    SuccessWithResult *int32 `json:"success-with-result,omitempty"`
    SuccessWithoutResult *int32 `json:"success-without-result,omitempty"`
    Successful *int32 `json:"successful,omitempty"`
    
}

