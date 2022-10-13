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
	Amount    *float64             `json:"amount"`
	From      *time.Time           `json:"from"`
	Label     *string              `json:"label"`
	Quantity  *int64               `json:"quantity"`
	Tax       *float64             `json:"tax"`
	To        *time.Time           `json:"to"`
	Total     *float64             `json:"total"`
	Type      *InvoiceItemTypeEnum `json:"type"`
	UnitPrice *string              `json:"unit_price"`
}
