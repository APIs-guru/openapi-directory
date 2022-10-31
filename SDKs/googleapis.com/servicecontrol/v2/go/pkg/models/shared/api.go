package shared



type API struct {
    Operation *string `json:"operation,omitempty"`
    Protocol *string `json:"protocol,omitempty"`
    Service *string `json:"service,omitempty"`
    Version *string `json:"version,omitempty"`
    
}

