package shared



type BatchModifyMessagesRequest struct {
    AddLabelIds []string `json:"addLabelIds,omitempty"`
    Ids []string `json:"ids,omitempty"`
    RemoveLabelIds []string `json:"removeLabelIds,omitempty"`
    
}

