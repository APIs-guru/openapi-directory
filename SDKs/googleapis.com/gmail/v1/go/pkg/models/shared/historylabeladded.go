package shared



type HistoryLabelAdded struct {
    LabelIds []string `json:"labelIds,omitempty"`
    Message *Message `json:"message,omitempty"`
    
}

