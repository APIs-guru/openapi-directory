package shared

import (
	"time"
)

type BulkPaymentInitiationJSON struct {
	BatchBookingPreferred  *bool                              `json:"batchBookingPreferred"`
	DebtorAccount          AccountReference16Ch               `json:"debtorAccount"`
	DebtorAgent            DebtorAgent7Ch                     `json:"debtorAgent"`
	Payments               []PaymentInitiationBulkElementJSON `json:"payments"`
	RequestedExecutionDate *time.Time                         `json:"requestedExecutionDate"`
	RequestedExecutionTime *time.Time                         `json:"requestedExecutionTime"`
}
