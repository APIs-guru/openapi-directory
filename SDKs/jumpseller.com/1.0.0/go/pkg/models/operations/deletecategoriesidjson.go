package operations

type DeleteCategoriesIDJSONPathParams struct {
	ID int32 `pathParam:"style=simple,explode=false,name=id"`
}

type DeleteCategoriesIDJSONQueryParams struct {
	Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
	Login     string `queryParam:"style=form,explode=true,name=login"`
}

type DeleteCategoriesIDJSONRequest struct {
	PathParams  DeleteCategoriesIDJSONPathParams
	QueryParams DeleteCategoriesIDJSONQueryParams
}

type DeleteCategoriesIDJSONResponse struct {
	ContentType                                    string
	DeleteCategoriesIDJSON200ApplicationJSONString *string
	NotFound                                       *interface{}
	StatusCode                                     int64
}
