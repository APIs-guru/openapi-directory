package operations

type GetAccountsAccountTradesPathParams struct {
	Account string `pathParam:"style=simple,explode=false,name=account"`
}

type GetAccountsAccountTradesRequest struct {
	PathParams GetAccountsAccountTradesPathParams
	Request    *string `request:"mediaType=application/json"`
}

type GetAccountsAccountTrades200ApplicationJSONSideEnum string

const (
	GetAccountsAccountTrades200ApplicationJSONSideEnumOne GetAccountsAccountTrades200ApplicationJSONSideEnum = "1"
	GetAccountsAccountTrades200ApplicationJSONSideEnumTwo GetAccountsAccountTrades200ApplicationJSONSideEnum = "2"
)

type GetAccountsAccountTrades200ApplicationJSON struct {
	AvgPrice           *float64                                            `json:"AvgPrice"`
	Commission         *float64                                            `json:"Commission"`
	CommissionCurrency *string                                             `json:"CommissionCurrency"`
	ContractID         *float64                                            `json:"ContractId"`
	Currency           *string                                             `json:"Currency"`
	CustomerOrderID    *float64                                            `json:"CustomerOrderId"`
	ExecID             *string                                             `json:"ExecId"`
	ExecutionTime      *string                                             `json:"ExecutionTime"`
	FilledQuantity     *float64                                            `json:"FilledQuantity"`
	LastMarket         *string                                             `json:"LastMarket"`
	ListingExchange    *string                                             `json:"ListingExchange"`
	OrderID            *string                                             `json:"OrderId"`
	OrderType          *float64                                            `json:"OrderType"`
	Quantity           *float64                                            `json:"Quantity"`
	RemainingQuantity  *float64                                            `json:"RemainingQuantity"`
	Side               *GetAccountsAccountTrades200ApplicationJSONSideEnum `json:"Side"`
	Ticker             *string                                             `json:"Ticker"`
	TradePrice         *float64                                            `json:"TradePrice"`
	TradeSize          *float64                                            `json:"TradeSize"`
}

type GetAccountsAccountTradesResponse struct {
	ContentType                                       string
	GetAccountsAccountTrades200ApplicationJSONObjects []GetAccountsAccountTrades200ApplicationJSON
	StatusCode                                        int64
}
