package operations

type GetOrganizationInsightApplicationsPathParams struct {
	OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
}

type GetOrganizationInsightApplicationsRequest struct {
	PathParams GetOrganizationInsightApplicationsPathParams
}

type GetOrganizationInsightApplicationsResponse struct {
	ContentType                                                string
	StatusCode                                                 int64
	GetOrganizationInsightApplications200ApplicationJSONObject map[string]interface{}
}
