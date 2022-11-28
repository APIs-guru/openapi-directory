package shared

import (
	"time"
)

// BulkPaymentInitiationJSON
// Generic Body for a bulk payment initation via JSON.
//
// paymentInformationId is contained in code but commented since it is n.a.
// and not all ASPSP are able to support this field now.
// In a later version the field will be mandatory.
type BulkPaymentInitiationJSON struct {
	BatchBookingPreferred  *bool                              `json:"batchBookingPreferred,omitempty"`
	DebtorAccount          AccountReference16Ch               `json:"debtorAccount"`
	DebtorAgent            DebtorAgent7Ch                     `json:"debtorAgent"`
	Payments               []PaymentInitiationBulkElementJSON `json:"payments"`
	RequestedExecutionDate *time.Time                         `json:"requestedExecutionDate,omitempty"`
	RequestedExecutionTime *time.Time                         `json:"requestedExecutionTime,omitempty"`
}
