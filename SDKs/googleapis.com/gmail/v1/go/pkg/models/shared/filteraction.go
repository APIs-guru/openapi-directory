package shared



type FilterAction struct {
    AddLabelIds []string `json:"addLabelIds,omitempty"`
    Forward *string `json:"forward,omitempty"`
    RemoveLabelIds []string `json:"removeLabelIds,omitempty"`
    
}

