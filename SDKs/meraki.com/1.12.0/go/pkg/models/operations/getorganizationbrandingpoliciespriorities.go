package operations

type GetOrganizationBrandingPoliciesPrioritiesPathParams struct {
	OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
}

type GetOrganizationBrandingPoliciesPrioritiesRequest struct {
	PathParams GetOrganizationBrandingPoliciesPrioritiesPathParams
}

type GetOrganizationBrandingPoliciesPrioritiesResponse struct {
	ContentType                                                       string
	StatusCode                                                        int64
	GetOrganizationBrandingPoliciesPriorities200ApplicationJSONObject map[string]interface{}
}
