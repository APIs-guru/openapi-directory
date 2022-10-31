package shared



type ObError1 struct {
    ErrorCode string `json:"ErrorCode"`
    Message string `json:"Message"`
    Path *string `json:"Path,omitempty"`
    URL *string `json:"Url,omitempty"`
    
}

