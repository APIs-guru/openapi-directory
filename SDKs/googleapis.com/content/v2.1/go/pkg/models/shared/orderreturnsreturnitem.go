package shared



type OrderreturnsReturnItem struct {
    Refund *OrderreturnsRefundOperation `json:"refund,omitempty"`
    Reject *OrderreturnsRejectOperation `json:"reject,omitempty"`
    ReturnItemID *string `json:"returnItemId,omitempty"`
    
}

