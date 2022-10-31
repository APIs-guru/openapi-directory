package shared

import (
"time")

type BulkPaymentInitiationWithStatusResponse struct {
    AcceptorTransactionDateTime *time.Time `json:"acceptorTransactionDateTime,omitempty"`
    BatchBookingPreferred *bool `json:"batchBookingPreferred,omitempty"`
    DebtorAccount AccountReference16Ch `json:"debtorAccount"`
    PaymentInformationID *string `json:"paymentInformationId,omitempty"`
    Payments []PaymentInitiationBulkElementJSON `json:"payments"`
    RequestedExecutionDate *time.Time `json:"requestedExecutionDate,omitempty"`
    TransactionStatus *TransactionStatusEnum `json:"transactionStatus,omitempty"`
    
}

