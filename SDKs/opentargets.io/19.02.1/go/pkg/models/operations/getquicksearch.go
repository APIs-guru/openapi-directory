package operations

type GetQuickSearchQueryParams struct {
	Q    string  `queryParam:"style=form,explode=true,name=q"`
	Size *string `queryParam:"style=form,explode=true,name=size"`
}

type GetQuickSearchRequest struct {
	QueryParams GetQuickSearchQueryParams
}

type GetQuickSearchResponse struct {
	ContentType string
	StatusCode  int64
}
