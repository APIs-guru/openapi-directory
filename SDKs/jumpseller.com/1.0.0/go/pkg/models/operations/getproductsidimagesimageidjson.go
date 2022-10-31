package operations

import (
	"openapi/pkg/models/shared"
)

type GetProductsIDImagesImageIDJSONPathParams struct {
	ID      int32 `pathParam:"style=simple,explode=false,name=id"`
	ImageID int32 `pathParam:"style=simple,explode=false,name=image_id"`
}

type GetProductsIDImagesImageIDJSONQueryParams struct {
	Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
	Login     string `queryParam:"style=form,explode=true,name=login"`
}

type GetProductsIDImagesImageIDJSONRequest struct {
	PathParams  GetProductsIDImagesImageIDJSONPathParams
	QueryParams GetProductsIDImagesImageIDJSONQueryParams
}

type GetProductsIDImagesImageIDJSONResponse struct {
	ContentType string
	Image       *shared.Image
	NotFound    *interface{}
	StatusCode  int64
}
