package operations

import (
	"openapi/pkg/models/shared"
)

type GetOrdersStatusStatusJSONStatusEnum string

const (
	GetOrdersStatusStatusJSONStatusEnumAbandoned      GetOrdersStatusStatusJSONStatusEnum = "Abandoned"
	GetOrdersStatusStatusJSONStatusEnumCanceled       GetOrdersStatusStatusJSONStatusEnum = "Canceled"
	GetOrdersStatusStatusJSONStatusEnumPendingPayment GetOrdersStatusStatusJSONStatusEnum = "Pending Payment"
	GetOrdersStatusStatusJSONStatusEnumPaid           GetOrdersStatusStatusJSONStatusEnum = "Paid"
)

type GetOrdersStatusStatusJSONPathParams struct {
	Status GetOrdersStatusStatusJSONStatusEnum `pathParam:"style=simple,explode=false,name=status"`
}

type GetOrdersStatusStatusJSONQueryParams struct {
	Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
	Login     string `queryParam:"style=form,explode=true,name=login"`
}

type GetOrdersStatusStatusJSONRequest struct {
	PathParams  GetOrdersStatusStatusJSONPathParams
	QueryParams GetOrdersStatusStatusJSONQueryParams
}

type GetOrdersStatusStatusJSONResponse struct {
	ContentType   string
	Orders        []shared.Order
	StatusCode    int64
	StatusInvalid *interface{}
}
