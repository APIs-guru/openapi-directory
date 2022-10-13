package operations

type GetUserAccountsQueryParams struct {
	Limit      *int64  `queryParam:"style=form,explode=true,name=limit"`
	PageNumber *int64  `queryParam:"style=form,explode=true,name=pageNumber"`
	Query      *string `queryParam:"style=form,explode=true,name=query"`
	Sort       *string `queryParam:"style=form,explode=true,name=sort"`
}

type GetUserAccountsRequest struct {
	QueryParams GetUserAccountsQueryParams
}

type GetUserAccountsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
