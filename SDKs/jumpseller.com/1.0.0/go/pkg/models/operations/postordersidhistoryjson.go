package operations

import (
	"openapi/pkg/models/shared"
)

type PostOrdersIDHistoryJSONPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type PostOrdersIDHistoryJSONQueryParams struct {
	Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
	Login     string `queryParam:"style=form,explode=true,name=login"`
}

type PostOrdersIDHistoryJSONRequest struct {
	PathParams  PostOrdersIDHistoryJSONPathParams
	QueryParams PostOrdersIDHistoryJSONQueryParams
	Request     shared.OrderHistoryEdit `request:"mediaType=application/json"`
}

type PostOrdersIDHistoryJSONResponse struct {
	ContentType  string
	OrderHistory *shared.OrderHistory
	StatusCode   int64
}
