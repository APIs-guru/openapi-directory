package shared



type DataDiskAssignment struct {
    DataDisks []string `json:"dataDisks,omitempty"`
    VMInstance *string `json:"vmInstance,omitempty"`
    
}

