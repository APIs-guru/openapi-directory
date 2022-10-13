package shared

import (
	"time"
)

type SandboxTransaction struct {
	AccountingBalance *float64   `json:"accountingBalance"`
	Amount            *float64   `json:"amount"`
	BookingDateTime   *time.Time `json:"bookingDateTime"`
	CreditDebit       *string    `json:"creditDebit"`
	Currency          *string    `json:"currency"`
	Description       *string    `json:"description"`
	Reference         *string    `json:"reference"`
	RelatedAccount    *string    `json:"relatedAccount"`
	RelatedName       *string    `json:"relatedName"`
	TransactionCode   *string    `json:"transactionCode"`
	ValueDateTime     *time.Time `json:"valueDateTime"`
}
