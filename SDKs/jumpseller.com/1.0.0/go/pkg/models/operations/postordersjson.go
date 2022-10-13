package operations

import (
	"openapi/pkg/models/shared"
)

type PostOrdersJSONQueryParams struct {
	Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
	Login     string `queryParam:"style=form,explode=true,name=login"`
}

type PostOrdersJSONRequest struct {
	QueryParams PostOrdersJSONQueryParams
	Request     shared.OrderCreate `request:"mediaType=application/json"`
}

type PostOrdersJSONResponse struct {
	ContentType string
	Order       *shared.Order
	StatusCode  int64
}
