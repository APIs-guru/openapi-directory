package operations

import (
	"openapi/pkg/models/shared"
)

type GetOrdersJSONQueryParams struct {
	Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
	Limit     *int64 `queryParam:"style=form,explode=true,name=limit"`
	Login     string `queryParam:"style=form,explode=true,name=login"`
	Page      *int64 `queryParam:"style=form,explode=true,name=page"`
}

type GetOrdersJSONRequest struct {
	QueryParams GetOrdersJSONQueryParams
}

type GetOrdersJSONResponse struct {
	ContentType string
	Orders      []shared.Order
	StatusCode  int64
}
