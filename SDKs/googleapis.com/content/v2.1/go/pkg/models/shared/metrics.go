package shared

type Metrics struct {
	Aos                    *float64 `json:"aos"`
	AovMicros              *float64 `json:"aovMicros"`
	Clicks                 *string  `json:"clicks"`
	ConversionRate         *float64 `json:"conversionRate"`
	ConversionValueMicros  *string  `json:"conversionValueMicros"`
	Conversions            *float64 `json:"conversions"`
	Ctr                    *float64 `json:"ctr"`
	DaysToShip             *float64 `json:"daysToShip"`
	Impressions            *string  `json:"impressions"`
	ItemDaysToShip         *float64 `json:"itemDaysToShip"`
	ItemFillRate           *float64 `json:"itemFillRate"`
	OrderedItemSalesMicros *string  `json:"orderedItemSalesMicros"`
	OrderedItems           *string  `json:"orderedItems"`
	Orders                 *string  `json:"orders"`
	RejectedItems          *string  `json:"rejectedItems"`
	ReturnRate             *float64 `json:"returnRate"`
	ReturnedItems          *string  `json:"returnedItems"`
	ReturnsMicros          *string  `json:"returnsMicros"`
	ShippedItemSalesMicros *string  `json:"shippedItemSalesMicros"`
	ShippedItems           *string  `json:"shippedItems"`
	ShippedOrders          *string  `json:"shippedOrders"`
	UnshippedItems         *float64 `json:"unshippedItems"`
	UnshippedOrders        *float64 `json:"unshippedOrders"`
}
