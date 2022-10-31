package shared



type OrdersRefundOrderRequest struct {
    Amount *MonetaryAmount `json:"amount,omitempty"`
    FullRefund *bool `json:"fullRefund,omitempty"`
    OperationID *string `json:"operationId,omitempty"`
    Reason *string `json:"reason,omitempty"`
    ReasonText *string `json:"reasonText,omitempty"`
    
}

