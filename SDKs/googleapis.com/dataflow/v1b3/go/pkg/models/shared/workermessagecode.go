package shared



type WorkerMessageCode struct {
    Code *string `json:"code,omitempty"`
    Parameters map[string]interface{} `json:"parameters,omitempty"`
    
}

