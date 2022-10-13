package shared

import (
	"time"
)

type LandlordAccountingEntryModel struct {
	Amount            *float64   `json:"Amount"`
	Date              *time.Time `json:"Date"`
	Description       *string    `json:"Description"`
	TransactionNumber *int32     `json:"TransactionNumber"`
}
