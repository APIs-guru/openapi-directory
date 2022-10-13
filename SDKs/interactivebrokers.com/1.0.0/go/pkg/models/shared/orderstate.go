package shared

type OrderStateSideEnum string

const (
	OrderStateSideEnumOne OrderStateSideEnum = "1"
	OrderStateSideEnumTwo OrderStateSideEnum = "2"
)

type OrderState struct {
	ContractID        *float64            `json:"ContractId"`
	CustomerOrderID   *float64            `json:"CustomerOrderId"`
	FilledQuantity    *float64            `json:"FilledQuantity"`
	ListingExchange   *string             `json:"ListingExchange"`
	OrderType         *float64            `json:"OrderType"`
	OutsideRth        *string             `json:"OutsideRTH"`
	Price             *float64            `json:"Price"`
	RemainingQuantity *float64            `json:"RemainingQuantity"`
	Side              *OrderStateSideEnum `json:"Side"`
	Status            *OrderStatusEnum    `json:"Status"`
	Ticker            *string             `json:"Ticker"`
	TimeInForce       *float64            `json:"TimeInForce"`
	TransactionTime   *string             `json:"TransactionTime"`
	Warning           *string             `json:"Warning"`
}
