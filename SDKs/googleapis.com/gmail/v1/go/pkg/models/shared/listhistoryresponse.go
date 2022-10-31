package shared



type ListHistoryResponse struct {
    History []History `json:"history,omitempty"`
    HistoryID *string `json:"historyId,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

