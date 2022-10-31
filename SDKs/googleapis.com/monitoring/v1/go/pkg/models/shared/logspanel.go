package shared



type LogsPanel struct {
    Filter *string `json:"filter,omitempty"`
    ResourceNames []string `json:"resourceNames,omitempty"`
    
}

