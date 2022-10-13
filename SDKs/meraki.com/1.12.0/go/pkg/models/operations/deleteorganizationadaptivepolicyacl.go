package operations

type DeleteOrganizationAdaptivePolicyACLPathParams struct {
	ID             string `pathParam:"style=simple,explode=false,name=id"`
	OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
}

type DeleteOrganizationAdaptivePolicyACLRequest struct {
	PathParams DeleteOrganizationAdaptivePolicyACLPathParams
}

type DeleteOrganizationAdaptivePolicyACLResponse struct {
	ContentType string
	StatusCode  int64
}
