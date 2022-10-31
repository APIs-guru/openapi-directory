package operations

type GetProductsCountJSONQueryParams struct {
	Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
	Login     string `queryParam:"style=form,explode=true,name=login"`
}

type GetProductsCountJSONRequest struct {
	QueryParams GetProductsCountJSONQueryParams
}

type GetProductsCountJSONResponse struct {
	ContentType string
	Count       *interface{}
	StatusCode  int64
}
