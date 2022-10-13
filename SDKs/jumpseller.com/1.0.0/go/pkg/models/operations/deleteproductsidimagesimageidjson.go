package operations

type DeleteProductsIDImagesImageIDJSONPathParams struct {
	ID      int32 `pathParam:"style=simple,explode=false,name=id"`
	ImageID int32 `pathParam:"style=simple,explode=false,name=image_id"`
}

type DeleteProductsIDImagesImageIDJSONQueryParams struct {
	Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
	Login     string `queryParam:"style=form,explode=true,name=login"`
}

type DeleteProductsIDImagesImageIDJSONRequest struct {
	PathParams  DeleteProductsIDImagesImageIDJSONPathParams
	QueryParams DeleteProductsIDImagesImageIDJSONQueryParams
}

type DeleteProductsIDImagesImageIDJSONResponse struct {
	ContentType                                               string
	DeleteProductsIDImagesImageIDJSON200ApplicationJSONString *string
	NotFound                                                  *interface{}
	StatusCode                                                int64
}
