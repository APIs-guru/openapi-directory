package operations

import (
	"openapi/pkg/models/shared"
)

type PostAccountsAccountOrdersPathParams struct {
	Account string `pathParam:"style=simple,explode=false,name=account"`
}

type PostAccountsAccountOrdersRequestBody struct {
	AuxPrice              *float64 `json:"Aux Price"`
	ContractID            *float64 `json:"ContractId"`
	Currency              *string  `json:"Currency"`
	CustomerOrderID       *string  `json:"CustomerOrderId"`
	GermanHftAlgo         *bool    `json:"GermanHftAlgo"`
	InstrumentType        *string  `json:"InstrumentType"`
	ListingExchange       *string  `json:"ListingExchange"`
	Mifid2Algo            *string  `json:"Mifid2Algo"`
	Mifid2DecisionMaker   *string  `json:"Mifid2DecisionMaker"`
	Mifid2ExecutionAlgo   *string  `json:"Mifid2ExecutionAlgo"`
	Mifid2ExecutionTrader *string  `json:"Mifid2ExecutionTrader"`
	OrderType             *float64 `json:"Order Type"`
	OrderRestrictions     *float64 `json:"OrderRestrictions"`
	OutsideRth            *float64 `json:"Outside RTH"`
	Price                 *float64 `json:"Price"`
	Quantity              *float64 `json:"Quantity"`
	Side                  *float64 `json:"Side"`
	Ticker                *string  `json:"Ticker"`
	TimeInForce           *float64 `json:"Time in Force"`
}

type PostAccountsAccountOrdersRequest struct {
	PathParams PostAccountsAccountOrdersPathParams
	Request    PostAccountsAccountOrdersRequestBody `request:"mediaType=application/json"`
}

type PostAccountsAccountOrdersResponse struct {
	ContentType string
	StatusCode  int64
	OrderStates []shared.OrderState
}
