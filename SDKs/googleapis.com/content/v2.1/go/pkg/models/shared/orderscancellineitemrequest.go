package shared



type OrdersCancelLineItemRequest struct {
    LineItemID *string `json:"lineItemId,omitempty"`
    OperationID *string `json:"operationId,omitempty"`
    ProductID *string `json:"productId,omitempty"`
    Quantity *int64 `json:"quantity,omitempty"`
    Reason *string `json:"reason,omitempty"`
    ReasonText *string `json:"reasonText,omitempty"`
    
}

