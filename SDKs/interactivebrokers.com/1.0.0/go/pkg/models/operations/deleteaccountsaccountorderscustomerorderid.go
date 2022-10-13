package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteAccountsAccountOrdersCustomerOrderIDPathParams struct {
	CustomerOrderID string `pathParam:"style=simple,explode=false,name=CustomerOrderId"`
	Account         string `pathParam:"style=simple,explode=false,name=account"`
}

type DeleteAccountsAccountOrdersCustomerOrderIDRequest struct {
	PathParams DeleteAccountsAccountOrdersCustomerOrderIDPathParams
}

type DeleteAccountsAccountOrdersCustomerOrderID200ApplicationJSON struct {
	CustomerOrderID *string                 `json:"CustomerOrderId"`
	OrderQty        *float64                `json:"OrderQty"`
	OrderType       *float64                `json:"OrderType"`
	Price           *string                 `json:"Price"`
	Side            *float64                `json:"Side"`
	Status          *shared.OrderStatusEnum `json:"Status"`
	Symbol          *float64                `json:"Symbol"`
	Warning         *string                 `json:"Warning"`
}

type DeleteAccountsAccountOrdersCustomerOrderIDResponse struct {
	ContentType                                                         string
	DeleteAccountsAccountOrdersCustomerOrderID200ApplicationJSONObjects []DeleteAccountsAccountOrdersCustomerOrderID200ApplicationJSON
	StatusCode                                                          int64
}
