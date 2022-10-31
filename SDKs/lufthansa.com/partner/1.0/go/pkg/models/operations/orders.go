package operations

import (
	"openapi/pkg/models/shared"
)

type OrdersPathParams struct {
	Name    string `pathParam:"style=simple,explode=false,name=name"`
	OrderID string `pathParam:"style=simple,explode=false,name=orderID"`
}

type OrdersHeaders struct {
	Accept string `header:"style=simple,explode=false,name=Accept"`
}

type OrdersSecurity struct {
	Auth shared.SchemeAuth `security:"scheme,type=oauth2"`
}

type OrdersRequest struct {
	PathParams OrdersPathParams
	Headers    OrdersHeaders
	Security   OrdersSecurity
}

type OrdersResponse struct {
	ContentType                    string
	Orders200ApplicationJSONString *string
	StatusCode                     int64
}
