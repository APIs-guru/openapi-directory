package operations

type GetOrganizationAdaptivePolicyAclsPathParams struct {
	OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
}

type GetOrganizationAdaptivePolicyAclsRequest struct {
	PathParams GetOrganizationAdaptivePolicyAclsPathParams
}

type GetOrganizationAdaptivePolicyAclsResponse struct {
	ContentType                                               string
	StatusCode                                                int64
	GetOrganizationAdaptivePolicyAcls200ApplicationJSONObject map[string]interface{}
}
