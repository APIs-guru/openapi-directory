package shared



type OrderreturnsCreateOrderReturnRequest struct {
    LineItems []OrderreturnsLineItem `json:"lineItems,omitempty"`
    OperationID *string `json:"operationId,omitempty"`
    OrderID *string `json:"orderId,omitempty"`
    ReturnMethodType *string `json:"returnMethodType,omitempty"`
    
}

