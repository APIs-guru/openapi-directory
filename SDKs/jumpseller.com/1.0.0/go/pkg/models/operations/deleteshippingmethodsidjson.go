package operations

type DeleteShippingMethodsIDJSONPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteShippingMethodsIDJSONQueryParams struct {
	Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
	Login     string `queryParam:"style=form,explode=true,name=login"`
}

type DeleteShippingMethodsIDJSONRequest struct {
	PathParams  DeleteShippingMethodsIDJSONPathParams
	QueryParams DeleteShippingMethodsIDJSONQueryParams
}

type DeleteShippingMethodsIDJSONResponse struct {
	ContentType                                         string
	DeleteShippingMethodsIDJSON200ApplicationJSONString *string
	NotFound                                            *interface{}
	StatusCode                                          int64
}
