package shared



type OrderReportTransaction struct {
    DisbursementAmount *Price `json:"disbursementAmount,omitempty"`
    DisbursementCreationDate *string `json:"disbursementCreationDate,omitempty"`
    DisbursementDate *string `json:"disbursementDate,omitempty"`
    DisbursementID *string `json:"disbursementId,omitempty"`
    MerchantID *string `json:"merchantId,omitempty"`
    MerchantOrderID *string `json:"merchantOrderId,omitempty"`
    OrderID *string `json:"orderId,omitempty"`
    ProductAmount *Amount `json:"productAmount,omitempty"`
    ProductAmountWithRemittedTax *ProductAmount `json:"productAmountWithRemittedTax,omitempty"`
    TransactionDate *string `json:"transactionDate,omitempty"`
    
}

