package operations

import (
	"openapi/pkg/models/shared"
)

type PutOrdersIDJSONPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type PutOrdersIDJSONQueryParams struct {
	Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
	Login     string `queryParam:"style=form,explode=true,name=login"`
}

type PutOrdersIDJSONRequest struct {
	PathParams  PutOrdersIDJSONPathParams
	QueryParams PutOrdersIDJSONQueryParams
	Request     shared.OrderEdit `request:"mediaType=application/json"`
}

type PutOrdersIDJSONResponse struct {
	ContentType string
	NotFound    *interface{}
	Order       *shared.Order
	StatusCode  int64
}
