package operations

type GetActionOrganizationRevisionListQueryParams struct {
	ID *string `queryParam:"style=form,explode=true,name=id"`
}

type GetActionOrganizationRevisionListRequest struct {
	QueryParams GetActionOrganizationRevisionListQueryParams
}

type GetActionOrganizationRevisionListResponse struct {
	ContentType string
	StatusCode  int64
}
