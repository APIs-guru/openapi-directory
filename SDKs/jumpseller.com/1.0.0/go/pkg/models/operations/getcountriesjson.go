package operations

type GetCountriesJSONQueryParams struct {
	Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
	Login     string `queryParam:"style=form,explode=true,name=login"`
}

type GetCountriesJSONRequest struct {
	QueryParams GetCountriesJSONQueryParams
}

type GetCountriesJSONResponse struct {
	ContentType string
	Countries   []interface{}
	StatusCode  int64
}
