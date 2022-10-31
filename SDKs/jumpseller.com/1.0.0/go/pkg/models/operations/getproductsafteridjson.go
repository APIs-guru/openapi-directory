package operations

import (
	"openapi/pkg/models/shared"
)

type GetProductsAfterIDJSONPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type GetProductsAfterIDJSONQueryParams struct {
	Authtoken string  `queryParam:"style=form,explode=true,name=authtoken"`
	Locale    *string `queryParam:"style=form,explode=true,name=locale"`
	Login     string  `queryParam:"style=form,explode=true,name=login"`
}

type GetProductsAfterIDJSONRequest struct {
	PathParams  GetProductsAfterIDJSONPathParams
	QueryParams GetProductsAfterIDJSONQueryParams
}

type GetProductsAfterIDJSONResponse struct {
	ContentType string
	NotFound    *interface{}
	Products    []shared.Product
	StatusCode  int64
}
