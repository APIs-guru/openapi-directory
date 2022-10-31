package operations

type GetActionOrganizationFollowerListQueryParams struct {
	ID *string `queryParam:"style=form,explode=true,name=id"`
}

type GetActionOrganizationFollowerListRequest struct {
	QueryParams GetActionOrganizationFollowerListQueryParams
}

type GetActionOrganizationFollowerListResponse struct {
	ContentType string
	StatusCode  int64
}
