package operations

import (
	"openapi/pkg/models/shared"
)

type GetOrdersIDJSONPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type GetOrdersIDJSONQueryParams struct {
	Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
	Login     string `queryParam:"style=form,explode=true,name=login"`
}

type GetOrdersIDJSONRequest struct {
	PathParams  GetOrdersIDJSONPathParams
	QueryParams GetOrdersIDJSONQueryParams
}

type GetOrdersIDJSONResponse struct {
	ContentType string
	NotFound    *interface{}
	Order       *shared.Order
	StatusCode  int64
}
