package operations

type GetActionTagListQueryParams struct {
	Limit  *int64 `queryParam:"style=form,explode=true,name=limit"`
	Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
}

type GetActionTagListRequest struct {
	QueryParams GetActionTagListQueryParams
}

type GetActionTagListResponse struct {
	ContentType string
	StatusCode  int64
}
