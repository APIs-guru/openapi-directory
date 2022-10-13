package operations

type GetActionPackageListQueryParams struct {
	Limit  *int64 `queryParam:"style=form,explode=true,name=limit"`
	Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
}

type GetActionPackageListRequest struct {
	QueryParams GetActionPackageListQueryParams
}

type GetActionPackageListResponse struct {
	ContentType string
	StatusCode  int64
}
