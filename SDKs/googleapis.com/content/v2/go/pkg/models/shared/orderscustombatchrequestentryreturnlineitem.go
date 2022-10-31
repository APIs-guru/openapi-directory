package shared



type OrdersCustomBatchRequestEntryReturnLineItem struct {
    LineItemID *string `json:"lineItemId,omitempty"`
    ProductID *string `json:"productId,omitempty"`
    Quantity *int64 `json:"quantity,omitempty"`
    Reason *string `json:"reason,omitempty"`
    ReasonText *string `json:"reasonText,omitempty"`
    
}

