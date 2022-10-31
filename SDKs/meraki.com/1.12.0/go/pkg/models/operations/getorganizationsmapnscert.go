package operations



type GetOrganizationSmApnsCertPathParams struct {
    OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
    
}

type GetOrganizationSmApnsCertRequest struct {
    PathParams GetOrganizationSmApnsCertPathParams 
    
}

type GetOrganizationSmApnsCertResponse struct {
    ContentType string 
    StatusCode int64 
    GetOrganizationSmApnsCert200ApplicationJSONObject map[string]interface{} 
    
}

