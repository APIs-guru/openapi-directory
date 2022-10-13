package operations

type GetPagesCountJSONQueryParams struct {
	Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
	Login     string `queryParam:"style=form,explode=true,name=login"`
}

type GetPagesCountJSONRequest struct {
	QueryParams GetPagesCountJSONQueryParams
}

type GetPagesCountJSONResponse struct {
	ContentType string
	Count       *interface{}
	StatusCode  int64
}
