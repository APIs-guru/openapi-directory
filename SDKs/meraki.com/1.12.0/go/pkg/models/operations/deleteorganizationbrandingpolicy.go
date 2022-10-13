package operations

type DeleteOrganizationBrandingPolicyPathParams struct {
	BrandingPolicyID string `pathParam:"style=simple,explode=false,name=brandingPolicyId"`
	OrganizationID   string `pathParam:"style=simple,explode=false,name=organizationId"`
}

type DeleteOrganizationBrandingPolicyRequest struct {
	PathParams DeleteOrganizationBrandingPolicyPathParams
}

type DeleteOrganizationBrandingPolicyResponse struct {
	ContentType string
	StatusCode  int64
}
