package shared

import (
	"time"
)

// LandlordAccountingEntryModel
// Landlord Accounting - Finance Entry
type LandlordAccountingEntryModel struct {
	Amount            *float64   `json:"Amount,omitempty"`
	Date              *time.Time `json:"Date,omitempty"`
	Description       *string    `json:"Description,omitempty"`
	TransactionNumber *int32     `json:"TransactionNumber,omitempty"`
}
