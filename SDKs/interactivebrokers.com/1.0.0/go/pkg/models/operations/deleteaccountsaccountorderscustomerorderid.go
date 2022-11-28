package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteAccountsAccountOrdersCustomerOrderIDPathParams struct {
	CustomerOrderID string `pathParam:"style=simple,explode=false,name=CustomerOrderId"`
	Account         string `pathParam:"style=simple,explode=false,name=account"`
}

type DeleteAccountsAccountOrdersCustomerOrderID200ApplicationJSON struct {
	CustomerOrderID *string                 `json:"CustomerOrderId,omitempty"`
	OrderQty        *float64                `json:"OrderQty,omitempty"`
	OrderType       *float64                `json:"OrderType,omitempty"`
	Price           *string                 `json:"Price,omitempty"`
	Side            *float64                `json:"Side,omitempty"`
	Status          *shared.OrderStatusEnum `json:"Status,omitempty"`
	Symbol          *float64                `json:"Symbol,omitempty"`
	Warning         *string                 `json:"Warning,omitempty"`
}

type DeleteAccountsAccountOrdersCustomerOrderIDRequest struct {
	PathParams DeleteAccountsAccountOrdersCustomerOrderIDPathParams
}

type DeleteAccountsAccountOrdersCustomerOrderIDResponse struct {
	ContentType                                                         string
	DeleteAccountsAccountOrdersCustomerOrderID200ApplicationJSONObjects []DeleteAccountsAccountOrdersCustomerOrderID200ApplicationJSON
	StatusCode                                                          int64
}
