package shared



type ModifyMessageRequest struct {
    AddLabelIds []string `json:"addLabelIds,omitempty"`
    RemoveLabelIds []string `json:"removeLabelIds,omitempty"`
    
}

