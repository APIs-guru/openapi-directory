package operations

type GetTransactionsQueryParams struct {
	Limit      *int64  `queryParam:"style=form,explode=true,name=limit"`
	PageNumber *int64  `queryParam:"style=form,explode=true,name=pageNumber"`
	Query      *string `queryParam:"style=form,explode=true,name=query"`
	Sort       *string `queryParam:"style=form,explode=true,name=sort"`
}

type GetTransactionsRequest struct {
	QueryParams GetTransactionsQueryParams
}

type GetTransactionsResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
