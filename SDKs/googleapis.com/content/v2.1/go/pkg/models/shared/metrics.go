package shared

// Metrics
// Performance metrics. Values are only set for metrics requested explicitly in the request's search query.
type Metrics struct {
	Aos                    *float64 `json:"aos,omitempty"`
	AovMicros              *float64 `json:"aovMicros,omitempty"`
	Clicks                 *string  `json:"clicks,omitempty"`
	ConversionRate         *float64 `json:"conversionRate,omitempty"`
	ConversionValueMicros  *string  `json:"conversionValueMicros,omitempty"`
	Conversions            *float64 `json:"conversions,omitempty"`
	Ctr                    *float64 `json:"ctr,omitempty"`
	DaysToShip             *float64 `json:"daysToShip,omitempty"`
	Impressions            *string  `json:"impressions,omitempty"`
	ItemDaysToShip         *float64 `json:"itemDaysToShip,omitempty"`
	ItemFillRate           *float64 `json:"itemFillRate,omitempty"`
	OrderedItemSalesMicros *string  `json:"orderedItemSalesMicros,omitempty"`
	OrderedItems           *string  `json:"orderedItems,omitempty"`
	Orders                 *string  `json:"orders,omitempty"`
	RejectedItems          *string  `json:"rejectedItems,omitempty"`
	ReturnRate             *float64 `json:"returnRate,omitempty"`
	ReturnedItems          *string  `json:"returnedItems,omitempty"`
	ReturnsMicros          *string  `json:"returnsMicros,omitempty"`
	ShippedItemSalesMicros *string  `json:"shippedItemSalesMicros,omitempty"`
	ShippedItems           *string  `json:"shippedItems,omitempty"`
	ShippedOrders          *string  `json:"shippedOrders,omitempty"`
	UnshippedItems         *float64 `json:"unshippedItems,omitempty"`
	UnshippedOrders        *float64 `json:"unshippedOrders,omitempty"`
}
