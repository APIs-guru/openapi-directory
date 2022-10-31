package shared

import (
"time")

type LandlordAccountingModel struct {
    AccountBalance *float64 `json:"AccountBalance,omitempty"`
    LastPayment *time.Time `json:"LastPayment,omitempty"`
    PaymentHistory []LandlordAccountingEntryModel `json:"PaymentHistory,omitempty"`
    Statements []LandlordAccountingInvoiceModel `json:"Statements,omitempty"`
    
}

