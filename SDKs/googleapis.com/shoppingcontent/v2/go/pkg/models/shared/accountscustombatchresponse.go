package shared



type AccountsCustomBatchResponse struct {
    Entries []AccountsCustomBatchResponseEntry `json:"entries,omitempty"`
    Kind *string `json:"kind,omitempty"`
    
}

