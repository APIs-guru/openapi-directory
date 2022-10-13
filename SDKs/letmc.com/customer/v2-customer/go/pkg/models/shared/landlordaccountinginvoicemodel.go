package shared

import (
	"time"
)

type LandlordAccountingInvoiceModel struct {
	Date                 *time.Time `json:"Date"`
	InvoiceID            *string    `json:"InvoiceID"`
	IsMaintenanceInvoice *bool      `json:"IsMaintenanceInvoice"`
}
