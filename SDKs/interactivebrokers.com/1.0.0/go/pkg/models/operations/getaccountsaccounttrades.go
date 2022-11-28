package operations

type GetAccountsAccountTradesPathParams struct {
	Account string `pathParam:"style=simple,explode=false,name=account"`
}

type GetAccountsAccountTrades200ApplicationJSONSideEnum string

const (
	GetAccountsAccountTrades200ApplicationJSONSideEnumOne GetAccountsAccountTrades200ApplicationJSONSideEnum = "1"
	GetAccountsAccountTrades200ApplicationJSONSideEnumTwo GetAccountsAccountTrades200ApplicationJSONSideEnum = "2"
)

type GetAccountsAccountTrades200ApplicationJSON struct {
	AvgPrice           *float64                                            `json:"AvgPrice,omitempty"`
	Commission         *float64                                            `json:"Commission,omitempty"`
	CommissionCurrency *string                                             `json:"CommissionCurrency,omitempty"`
	ContractID         *float64                                            `json:"ContractId,omitempty"`
	Currency           *string                                             `json:"Currency,omitempty"`
	CustomerOrderID    *float64                                            `json:"CustomerOrderId,omitempty"`
	ExecID             *string                                             `json:"ExecId,omitempty"`
	ExecutionTime      *string                                             `json:"ExecutionTime,omitempty"`
	FilledQuantity     *float64                                            `json:"FilledQuantity,omitempty"`
	LastMarket         *string                                             `json:"LastMarket,omitempty"`
	ListingExchange    *string                                             `json:"ListingExchange,omitempty"`
	OrderID            *string                                             `json:"OrderId,omitempty"`
	OrderType          *float64                                            `json:"OrderType,omitempty"`
	Quantity           *float64                                            `json:"Quantity,omitempty"`
	RemainingQuantity  *float64                                            `json:"RemainingQuantity,omitempty"`
	Side               *GetAccountsAccountTrades200ApplicationJSONSideEnum `json:"Side,omitempty"`
	Ticker             *string                                             `json:"Ticker,omitempty"`
	TradePrice         *float64                                            `json:"TradePrice,omitempty"`
	TradeSize          *float64                                            `json:"TradeSize,omitempty"`
}

type GetAccountsAccountTradesRequest struct {
	PathParams GetAccountsAccountTradesPathParams
	Request    *string `request:"mediaType=application/json"`
}

type GetAccountsAccountTradesResponse struct {
	ContentType                                       string
	GetAccountsAccountTrades200ApplicationJSONObjects []GetAccountsAccountTrades200ApplicationJSON
	StatusCode                                        int64
}
