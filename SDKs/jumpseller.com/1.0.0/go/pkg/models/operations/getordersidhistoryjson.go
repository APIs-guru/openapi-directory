package operations

import (
	"openapi/pkg/models/shared"
)

type GetOrdersIDHistoryJSONPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type GetOrdersIDHistoryJSONQueryParams struct {
	Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
	Login     string `queryParam:"style=form,explode=true,name=login"`
}

type GetOrdersIDHistoryJSONRequest struct {
	PathParams  GetOrdersIDHistoryJSONPathParams
	QueryParams GetOrdersIDHistoryJSONQueryParams
}

type GetOrdersIDHistoryJSONResponse struct {
	ContentType    string
	OrderHistories []shared.OrderHistory
	StatusCode     int64
}
