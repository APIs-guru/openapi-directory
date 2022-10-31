package operations

type DeleteOrganizationPathParams struct {
	OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
}

type DeleteOrganizationRequest struct {
	PathParams DeleteOrganizationPathParams
}

type DeleteOrganizationResponse struct {
	ContentType string
	StatusCode  int64
}
