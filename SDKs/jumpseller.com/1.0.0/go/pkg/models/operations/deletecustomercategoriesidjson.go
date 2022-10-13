package operations

type DeleteCustomerCategoriesIDJSONPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteCustomerCategoriesIDJSONQueryParams struct {
	Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
	Login     string `queryParam:"style=form,explode=true,name=login"`
}

type DeleteCustomerCategoriesIDJSONRequest struct {
	PathParams  DeleteCustomerCategoriesIDJSONPathParams
	QueryParams DeleteCustomerCategoriesIDJSONQueryParams
}

type DeleteCustomerCategoriesIDJSONResponse struct {
	ContentType                                            string
	DeleteCustomerCategoriesIDJSON200ApplicationJSONString *string
	NotFound                                               *interface{}
	StatusCode                                             int64
}
