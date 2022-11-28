package shared

import (
	"time"
)

// BulkPaymentInitiationWithStatusResponse
// Generic JSON response body consistion of the corresponding bulk payment initation JSON body together with an optional transaction status field.
type BulkPaymentInitiationWithStatusResponse struct {
	AcceptorTransactionDateTime *time.Time                         `json:"acceptorTransactionDateTime,omitempty"`
	BatchBookingPreferred       *bool                              `json:"batchBookingPreferred,omitempty"`
	DebtorAccount               AccountReference16Ch               `json:"debtorAccount"`
	PaymentInformationID        *string                            `json:"paymentInformationId,omitempty"`
	Payments                    []PaymentInitiationBulkElementJSON `json:"payments"`
	RequestedExecutionDate      *time.Time                         `json:"requestedExecutionDate,omitempty"`
	TransactionStatus           *TransactionStatusEnum             `json:"transactionStatus,omitempty"`
}
