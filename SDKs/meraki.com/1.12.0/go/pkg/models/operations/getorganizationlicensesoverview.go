package operations



type GetOrganizationLicensesOverviewPathParams struct {
    OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
    
}

type GetOrganizationLicensesOverviewRequest struct {
    PathParams GetOrganizationLicensesOverviewPathParams 
    
}

type GetOrganizationLicensesOverviewResponse struct {
    ContentType string 
    StatusCode int64 
    GetOrganizationLicensesOverview200ApplicationJSONObject map[string]interface{} 
    
}

