package operations

import (
	"openapi/pkg/models/shared"
)

type PostProductsIDOptionsJSONPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type PostProductsIDOptionsJSONQueryParams struct {
	Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
	Login     string `queryParam:"style=form,explode=true,name=login"`
}

type PostProductsIDOptionsJSONRequest struct {
	PathParams  PostProductsIDOptionsJSONPathParams
	QueryParams PostProductsIDOptionsJSONQueryParams
	Request     shared.ProductOptionEdit `request:"mediaType=application/json"`
}

type PostProductsIDOptionsJSONResponse struct {
	ContentType   string
	ProductOption *shared.ProductOption
	StatusCode    int64
}
