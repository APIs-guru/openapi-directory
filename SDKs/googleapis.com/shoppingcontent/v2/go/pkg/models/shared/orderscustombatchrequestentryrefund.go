package shared



type OrdersCustomBatchRequestEntryRefund struct {
    Amount *Price `json:"amount,omitempty"`
    AmountPretax *Price `json:"amountPretax,omitempty"`
    AmountTax *Price `json:"amountTax,omitempty"`
    Reason *string `json:"reason,omitempty"`
    ReasonText *string `json:"reasonText,omitempty"`
    
}

