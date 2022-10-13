package shared

import (
	"time"
)

type LandlordAccountingModel struct {
	AccountBalance *float64                         `json:"AccountBalance"`
	LastPayment    *time.Time                       `json:"LastPayment"`
	PaymentHistory []LandlordAccountingEntryModel   `json:"PaymentHistory"`
	Statements     []LandlordAccountingInvoiceModel `json:"Statements"`
}
