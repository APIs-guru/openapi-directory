package shared

import (
	"time"
)

type BulkPaymentInitiationJSON struct {
	BatchBookingPreferred  *bool                              `json:"batchBookingPreferred,omitempty"`
	DebtorAccount          AccountReference16Ch               `json:"debtorAccount"`
	DebtorAgent            DebtorAgent7Ch                     `json:"debtorAgent"`
	Payments               []PaymentInitiationBulkElementJSON `json:"payments"`
	RequestedExecutionDate *time.Time                         `json:"requestedExecutionDate,omitempty"`
	RequestedExecutionTime *time.Time                         `json:"requestedExecutionTime,omitempty"`
}
