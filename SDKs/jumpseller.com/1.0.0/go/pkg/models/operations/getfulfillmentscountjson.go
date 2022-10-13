package operations

type GetFulfillmentsCountJSONQueryParams struct {
	Authtoken string `queryParam:"style=form,explode=true,name=authtoken"`
	Login     string `queryParam:"style=form,explode=true,name=login"`
}

type GetFulfillmentsCountJSONRequest struct {
	QueryParams GetFulfillmentsCountJSONQueryParams
}

type GetFulfillmentsCountJSONResponse struct {
	ContentType string
	Count       *interface{}
	StatusCode  int64
}
