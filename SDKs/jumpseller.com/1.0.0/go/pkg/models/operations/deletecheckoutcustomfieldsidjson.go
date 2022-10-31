package operations

type DeleteCheckoutCustomFieldsIDJSONPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteCheckoutCustomFieldsIDJSONQueryParams struct {
	Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
	Login     string `queryParam:"style=form,explode=true,name=login"`
}

type DeleteCheckoutCustomFieldsIDJSONRequest struct {
	PathParams  DeleteCheckoutCustomFieldsIDJSONPathParams
	QueryParams DeleteCheckoutCustomFieldsIDJSONQueryParams
}

type DeleteCheckoutCustomFieldsIDJSONResponse struct {
	ContentType                                              string
	DeleteCheckoutCustomFieldsIDJSON200ApplicationJSONString *string
	NotFound                                                 *interface{}
	StatusCode                                               int64
}
