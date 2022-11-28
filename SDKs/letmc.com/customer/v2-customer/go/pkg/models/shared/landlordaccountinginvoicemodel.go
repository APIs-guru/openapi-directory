package shared

import (
	"time"
)

// LandlordAccountingInvoiceModel
// Invoices
type LandlordAccountingInvoiceModel struct {
	Date                 *time.Time `json:"Date,omitempty"`
	InvoiceID            *string    `json:"InvoiceID,omitempty"`
	IsMaintenanceInvoice *bool      `json:"IsMaintenanceInvoice,omitempty"`
}
