package operations

import (
	"openapi/pkg/models/shared"
)

type PostProductsIDImagesJSONPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type PostProductsIDImagesJSONQueryParams struct {
	Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
	Login     string `queryParam:"style=form,explode=true,name=login"`
}

type PostProductsIDImagesJSONRequest struct {
	PathParams  PostProductsIDImagesJSONPathParams
	QueryParams PostProductsIDImagesJSONQueryParams
	Request     shared.ImageEdit `request:"mediaType=application/json"`
}

type PostProductsIDImagesJSONResponse struct {
	ContentType string
	Image       *shared.Image
	StatusCode  int64
}
