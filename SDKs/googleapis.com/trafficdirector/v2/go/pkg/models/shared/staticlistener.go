package shared



type StaticListener struct {
    LastUpdated *string `json:"lastUpdated,omitempty"`
    Listener map[string]interface{} `json:"listener,omitempty"`
    
}

