package operations

import (
	"openapi/pkg/models/shared"
)

type GetOrdersOrderIDPathParams struct {
	OrderID string `pathParam:"style=simple,explode=false,name=orderId"`
}

type GetOrdersOrderIDRequest struct {
	PathParams GetOrdersOrderIDPathParams
}

type GetOrdersOrderIDResponse struct {
	ContentType string
	GetOrder    *shared.GetOrder
	StatusCode  int64
}
