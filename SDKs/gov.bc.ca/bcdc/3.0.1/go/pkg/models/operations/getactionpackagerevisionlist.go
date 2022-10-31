package operations

type GetActionPackageRevisionListQueryParams struct {
	ID *string `queryParam:"style=form,explode=true,name=id"`
}

type GetActionPackageRevisionListRequest struct {
	QueryParams GetActionPackageRevisionListQueryParams
}

type GetActionPackageRevisionListResponse struct {
	ContentType string
	StatusCode  int64
}
