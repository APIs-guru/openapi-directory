package shared



type Operation struct {
    Done *bool `json:"done,omitempty"`
    Error *Status `json:"error,omitempty"`
    Response map[string]interface{} `json:"response,omitempty"`
    
}

