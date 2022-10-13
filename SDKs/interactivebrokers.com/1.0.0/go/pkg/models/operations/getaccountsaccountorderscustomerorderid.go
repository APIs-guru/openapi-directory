package operations

import (
	"openapi/pkg/models/shared"
)

type GetAccountsAccountOrdersCustomerOrderIDPathParams struct {
	CustomerOrderID string `pathParam:"style=simple,explode=false,name=CustomerOrderId"`
	Account         string `pathParam:"style=simple,explode=false,name=account"`
}

type GetAccountsAccountOrdersCustomerOrderIDRequest struct {
	PathParams GetAccountsAccountOrdersCustomerOrderIDPathParams
}

type GetAccountsAccountOrdersCustomerOrderIDResponse struct {
	ContentType string
	StatusCode  int64
	OrderStates []shared.OrderState
}
