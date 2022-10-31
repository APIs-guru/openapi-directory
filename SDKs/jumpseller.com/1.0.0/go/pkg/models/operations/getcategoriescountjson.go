package operations

type GetCategoriesCountJSONQueryParams struct {
	Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
	Login     string `queryParam:"style=form,explode=true,name=login"`
}

type GetCategoriesCountJSONRequest struct {
	QueryParams GetCategoriesCountJSONQueryParams
}

type GetCategoriesCountJSONResponse struct {
	ContentType string
	Count       *interface{}
	StatusCode  int64
}
