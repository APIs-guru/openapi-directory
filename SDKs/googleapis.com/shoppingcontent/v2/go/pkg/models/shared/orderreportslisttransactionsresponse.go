package shared



type OrderreportsListTransactionsResponse struct {
    Kind *string `json:"kind,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    Transactions []OrderReportTransaction `json:"transactions,omitempty"`
    
}

