package operations

import (
	"openapi/pkg/models/shared"
)

type PutAccountsAccountOrdersCustomerOrderIDPathParams struct {
	CustomerOrderID string `pathParam:"style=simple,explode=false,name=CustomerOrderId"`
	Account         string `pathParam:"style=simple,explode=false,name=account"`
}

type PutAccountsAccountOrdersCustomerOrderIDRequestBody struct {
	AuxPrice              *float64 `json:"Aux Price"`
	CustomerOrderID       *string  `json:"CustomerOrderId"`
	GermanHftAlgo         *bool    `json:"GermanHftAlgo"`
	Mifid2Algo            *string  `json:"Mifid2Algo"`
	Mifid2DecisionMaker   *string  `json:"Mifid2DecisionMaker"`
	Mifid2ExecutionAlgo   *string  `json:"Mifid2ExecutionAlgo"`
	Mifid2ExecutionTrader *string  `json:"Mifid2ExecutionTrader"`
	OrderType             *float64 `json:"Order Type"`
	OrigCustomerOrderID   *string  `json:"OrigCustomerOrderId"`
	OutsideRth            *float64 `json:"Outside RTH"`
	Price                 *float64 `json:"Price"`
	Quantity              *float64 `json:"Quantity"`
	Side                  *float64 `json:"Side"`
	TimeInForce           *float64 `json:"Time in Force"`
}

type PutAccountsAccountOrdersCustomerOrderIDRequest struct {
	PathParams PutAccountsAccountOrdersCustomerOrderIDPathParams
	Request    PutAccountsAccountOrdersCustomerOrderIDRequestBody `request:"mediaType=application/json"`
}

type PutAccountsAccountOrdersCustomerOrderID200ApplicationJSON struct {
	CustomerOrderID *string                 `json:"CustomerOrderId"`
	OrderQty        *float64                `json:"OrderQty"`
	OrderType       *float64                `json:"OrderType"`
	Price           *string                 `json:"Price"`
	Side            *float64                `json:"Side"`
	Status          *shared.OrderStatusEnum `json:"Status"`
	Symbol          *float64                `json:"Symbol"`
	Warning         *string                 `json:"Warning"`
}

type PutAccountsAccountOrdersCustomerOrderIDResponse struct {
	ContentType                                                      string
	PutAccountsAccountOrdersCustomerOrderID200ApplicationJSONObjects []PutAccountsAccountOrdersCustomerOrderID200ApplicationJSON
	StatusCode                                                       int64
}
