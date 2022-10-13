package operations

import (
	"openapi/pkg/models/shared"
)

type GetProductsIDImagesJSONPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type GetProductsIDImagesJSONQueryParams struct {
	Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
	Login     string `queryParam:"style=form,explode=true,name=login"`
}

type GetProductsIDImagesJSONRequest struct {
	PathParams  GetProductsIDImagesJSONPathParams
	QueryParams GetProductsIDImagesJSONQueryParams
}

type GetProductsIDImagesJSONResponse struct {
	ContentType string
	Images      []shared.Image
	NotFound    *interface{}
	StatusCode  int64
}
