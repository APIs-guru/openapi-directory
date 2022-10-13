package operations

type DeleteCustomFieldsIDJSONPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteCustomFieldsIDJSONQueryParams struct {
	Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
	Login     string `queryParam:"style=form,explode=true,name=login"`
}

type DeleteCustomFieldsIDJSONRequest struct {
	PathParams  DeleteCustomFieldsIDJSONPathParams
	QueryParams DeleteCustomFieldsIDJSONQueryParams
}

type DeleteCustomFieldsIDJSONResponse struct {
	ContentType                                      string
	DeleteCustomFieldsIDJSON200ApplicationJSONString *string
	NotFound                                         *interface{}
	StatusCode                                       int64
}
