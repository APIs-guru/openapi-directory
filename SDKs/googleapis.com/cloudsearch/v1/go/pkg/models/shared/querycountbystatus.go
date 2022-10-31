package shared



type QueryCountByStatus struct {
    Count *string `json:"count,omitempty"`
    StatusCode *int32 `json:"statusCode,omitempty"`
    
}

