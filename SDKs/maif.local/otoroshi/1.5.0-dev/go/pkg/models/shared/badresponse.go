package shared



type BadResponse struct {
    Body string `json:"body"`
    Headers map[string]string `json:"headers"`
    Status int32 `json:"status"`
    
}

