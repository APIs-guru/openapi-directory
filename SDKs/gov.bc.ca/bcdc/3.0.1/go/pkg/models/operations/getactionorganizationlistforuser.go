package operations

type GetActionOrganizationListForUserQueryParams struct {
	Permission *string `queryParam:"style=form,explode=true,name=permission"`
}

type GetActionOrganizationListForUserRequest struct {
	QueryParams GetActionOrganizationListForUserQueryParams
}

type GetActionOrganizationListForUserResponse struct {
	ContentType string
	StatusCode  int64
}
