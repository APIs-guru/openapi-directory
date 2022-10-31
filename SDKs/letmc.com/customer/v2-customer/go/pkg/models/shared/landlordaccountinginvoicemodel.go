package shared

import (
	"time"
)

type LandlordAccountingInvoiceModel struct {
	Date                 *time.Time `json:"Date,omitempty"`
	InvoiceID            *string    `json:"InvoiceID,omitempty"`
	IsMaintenanceInvoice *bool      `json:"IsMaintenanceInvoice,omitempty"`
}
