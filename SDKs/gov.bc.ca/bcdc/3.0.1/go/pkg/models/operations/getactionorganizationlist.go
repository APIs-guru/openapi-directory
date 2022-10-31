package operations

type GetActionOrganizationListQueryParams struct {
	Limit  *int64 `queryParam:"style=form,explode=true,name=limit"`
	Offset *int64 `queryParam:"style=form,explode=true,name=offset"`
}

type GetActionOrganizationListRequest struct {
	QueryParams GetActionOrganizationListQueryParams
}

type GetActionOrganizationListResponse struct {
	ContentType string
	StatusCode  int64
}
