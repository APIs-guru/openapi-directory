package operations

type PostAccountsAccountOrderImpactPathParams struct {
	Account string `pathParam:"style=simple,explode=false,name=account"`
}

type PostAccountsAccountOrderImpactRequestBody struct {
	AuxPrice        *float64 `json:"Aux Price,omitempty"`
	ContractID      *float64 `json:"ContractId,omitempty"`
	Currency        *string  `json:"Currency,omitempty"`
	CustomerOrderID *string  `json:"CustomerOrderId,omitempty"`
	InstrumentType  *string  `json:"InstrumentType,omitempty"`
	ListingExchange *string  `json:"ListingExchange,omitempty"`
	OrderType       *float64 `json:"Order Type,omitempty"`
	Price           *float64 `json:"Price,omitempty"`
	Quantity        *float64 `json:"Quantity,omitempty"`
	Side            *float64 `json:"Side,omitempty"`
	Ticker          *string  `json:"Ticker,omitempty"`
	TimeInForce     *float64 `json:"Time in Force,omitempty"`
}

type PostAccountsAccountOrderImpactRequest struct {
	PathParams PostAccountsAccountOrderImpactPathParams
	Request    PostAccountsAccountOrderImpactRequestBody `request:"mediaType=application/json"`
}

type PostAccountsAccountOrderImpact200ApplicationJSON struct {
	Commission          *float64 `json:"Commission,omitempty"`
	CommissionsCurrency *string  `json:"CommissionsCurrency,omitempty"`
	EquityWithLoan      *float64 `json:"EquityWithLoan,omitempty"`
	InitMargin          *float64 `json:"InitMargin,omitempty"`
	InitMarginBefore    *float64 `json:"InitMarginBefore,omitempty"`
	MaintMargin         *float64 `json:"MaintMargin,omitempty"`
	MaintMarginBefore   *float64 `json:"MaintMarginBefore,omitempty"`
	MarginCurrency      *string  `json:"MarginCurrency,omitempty"`
	MaxCommissions      *float64 `json:"MaxCommissions,omitempty"`
	MinCommissions      *float64 `json:"MinCommissions,omitempty"`
}

type PostAccountsAccountOrderImpactResponse struct {
	ContentType                                            string
	PostAccountsAccountOrderImpact200ApplicationJSONObject *PostAccountsAccountOrderImpact200ApplicationJSON
	StatusCode                                             int64
}
