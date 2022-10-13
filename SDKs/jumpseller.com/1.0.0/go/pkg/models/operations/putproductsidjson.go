package operations

import (
	"openapi/pkg/models/shared"
)

type PutProductsIDJSONPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type PutProductsIDJSONQueryParams struct {
	Authtoken string  `queryParam:"style=form,explode=true,name=authtoken"`
	Locale    *string `queryParam:"style=form,explode=true,name=locale"`
	Login     string  `queryParam:"style=form,explode=true,name=login"`
}

type PutProductsIDJSONRequest struct {
	PathParams  PutProductsIDJSONPathParams
	QueryParams PutProductsIDJSONQueryParams
	Request     shared.ProductEdit `request:"mediaType=application/json"`
}

type PutProductsIDJSONResponse struct {
	ContentType string
	NotFound    *interface{}
	Product     *shared.Product
	StatusCode  int64
}
