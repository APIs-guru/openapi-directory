package shared

import (
	"time"
)

type InvoiceItemTypeEnum string

const (
	InvoiceItemTypeEnumHourly InvoiceItemTypeEnum = "hourly"
	InvoiceItemTypeEnumMisc   InvoiceItemTypeEnum = "misc"
)

type InvoiceItem struct {
	Amount    *float64             `json:"amount,omitempty"`
	From      *time.Time           `json:"from,omitempty"`
	Label     *string              `json:"label,omitempty"`
	Quantity  *int64               `json:"quantity,omitempty"`
	Tax       *float64             `json:"tax,omitempty"`
	To        *time.Time           `json:"to,omitempty"`
	Total     *float64             `json:"total,omitempty"`
	Type      *InvoiceItemTypeEnum `json:"type,omitempty"`
	UnitPrice *string              `json:"unit_price,omitempty"`
}
