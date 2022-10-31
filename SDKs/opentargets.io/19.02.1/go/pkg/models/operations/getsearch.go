package operations

type GetSearchQueryParams struct {
	Filter *string `queryParam:"style=form,explode=true,name=filter"`
	From   *string `queryParam:"style=form,explode=true,name=from"`
	Q      string  `queryParam:"style=form,explode=true,name=q"`
	Size   *string `queryParam:"style=form,explode=true,name=size"`
}

type GetSearchRequest struct {
	QueryParams GetSearchQueryParams
}

type GetSearchResponse struct {
	ContentType string
	StatusCode  int64
}
