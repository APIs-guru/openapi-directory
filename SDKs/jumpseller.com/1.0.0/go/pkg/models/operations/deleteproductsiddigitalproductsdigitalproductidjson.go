package operations

type DeleteProductsIDDigitalProductsDigitalProductIDJSONPathParams struct {
	DigitalProductID int32 `pathParam:"style=simple,explode=false,name=digital_product_id"`
	ID               int32 `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteProductsIDDigitalProductsDigitalProductIDJSONQueryParams struct {
	Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
	Login     string `queryParam:"style=form,explode=true,name=login"`
}

type DeleteProductsIDDigitalProductsDigitalProductIDJSONRequest struct {
	PathParams  DeleteProductsIDDigitalProductsDigitalProductIDJSONPathParams
	QueryParams DeleteProductsIDDigitalProductsDigitalProductIDJSONQueryParams
}

type DeleteProductsIDDigitalProductsDigitalProductIDJSONResponse struct {
	ContentType                                                                 string
	DeleteProductsIDDigitalProductsDigitalProductIDJSON200ApplicationJSONString *string
	NotFound                                                                    *interface{}
	StatusCode                                                                  int64
}
