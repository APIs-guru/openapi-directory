package operations

type PostAccountsAccountOrderImpactPathParams struct {
	Account string `pathParam:"style=simple,explode=false,name=account"`
}

type PostAccountsAccountOrderImpactRequestBody struct {
	AuxPrice        *float64 `json:"Aux Price"`
	ContractID      *float64 `json:"ContractId"`
	Currency        *string  `json:"Currency"`
	CustomerOrderID *string  `json:"CustomerOrderId"`
	InstrumentType  *string  `json:"InstrumentType"`
	ListingExchange *string  `json:"ListingExchange"`
	OrderType       *float64 `json:"Order Type"`
	Price           *float64 `json:"Price"`
	Quantity        *float64 `json:"Quantity"`
	Side            *float64 `json:"Side"`
	Ticker          *string  `json:"Ticker"`
	TimeInForce     *float64 `json:"Time in Force"`
}

type PostAccountsAccountOrderImpactRequest struct {
	PathParams PostAccountsAccountOrderImpactPathParams
	Request    PostAccountsAccountOrderImpactRequestBody `request:"mediaType=application/json"`
}

type PostAccountsAccountOrderImpact200ApplicationJSON struct {
	Commission          *float64 `json:"Commission"`
	CommissionsCurrency *string  `json:"CommissionsCurrency"`
	EquityWithLoan      *float64 `json:"EquityWithLoan"`
	InitMargin          *float64 `json:"InitMargin"`
	InitMarginBefore    *float64 `json:"InitMarginBefore"`
	MaintMargin         *float64 `json:"MaintMargin"`
	MaintMarginBefore   *float64 `json:"MaintMarginBefore"`
	MarginCurrency      *string  `json:"MarginCurrency"`
	MaxCommissions      *float64 `json:"MaxCommissions"`
	MinCommissions      *float64 `json:"MinCommissions"`
}

type PostAccountsAccountOrderImpactResponse struct {
	ContentType                                            string
	PostAccountsAccountOrderImpact200ApplicationJSONObject *PostAccountsAccountOrderImpact200ApplicationJSON
	StatusCode                                             int64
}
