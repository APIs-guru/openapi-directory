package shared

import (
	"time"
)

type BulkPaymentInitiationWithStatusResponse struct {
	AcceptorTransactionDateTime *time.Time                         `json:"acceptorTransactionDateTime"`
	BatchBookingPreferred       *bool                              `json:"batchBookingPreferred"`
	DebtorAccount               AccountReference16Ch               `json:"debtorAccount"`
	PaymentInformationID        *string                            `json:"paymentInformationId"`
	Payments                    []PaymentInitiationBulkElementJSON `json:"payments"`
	RequestedExecutionDate      *time.Time                         `json:"requestedExecutionDate"`
	TransactionStatus           *TransactionStatusEnum             `json:"transactionStatus"`
}
