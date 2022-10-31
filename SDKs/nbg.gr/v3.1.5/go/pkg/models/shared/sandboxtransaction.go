package shared

import (
"time")

type SandboxTransaction struct {
    AccountingBalance *float64 `json:"accountingBalance,omitempty"`
    Amount *float64 `json:"amount,omitempty"`
    BookingDateTime *time.Time `json:"bookingDateTime,omitempty"`
    CreditDebit *string `json:"creditDebit,omitempty"`
    Currency *string `json:"currency,omitempty"`
    Description *string `json:"description,omitempty"`
    Reference *string `json:"reference,omitempty"`
    RelatedAccount *string `json:"relatedAccount,omitempty"`
    RelatedName *string `json:"relatedName,omitempty"`
    TransactionCode *string `json:"transactionCode,omitempty"`
    ValueDateTime *time.Time `json:"valueDateTime,omitempty"`
    
}

