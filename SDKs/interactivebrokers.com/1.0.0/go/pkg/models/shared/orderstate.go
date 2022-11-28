package shared

type OrderStateSideEnum string

const (
	OrderStateSideEnumOne OrderStateSideEnum = "1"
	OrderStateSideEnumTwo OrderStateSideEnum = "2"
)

// OrderState
// An object containing all the properties defining an order
type OrderState struct {
	ContractID        *float64            `json:"ContractId,omitempty"`
	CustomerOrderID   *float64            `json:"CustomerOrderId,omitempty"`
	FilledQuantity    *float64            `json:"FilledQuantity,omitempty"`
	ListingExchange   *string             `json:"ListingExchange,omitempty"`
	OrderType         *float64            `json:"OrderType,omitempty"`
	OutsideRth        *string             `json:"OutsideRTH,omitempty"`
	Price             *float64            `json:"Price,omitempty"`
	RemainingQuantity *float64            `json:"RemainingQuantity,omitempty"`
	Side              *OrderStateSideEnum `json:"Side,omitempty"`
	Status            *OrderStatusEnum    `json:"Status,omitempty"`
	Ticker            *string             `json:"Ticker,omitempty"`
	TimeInForce       *float64            `json:"TimeInForce,omitempty"`
	TransactionTime   *string             `json:"TransactionTime,omitempty"`
	Warning           *string             `json:"Warning,omitempty"`
}
