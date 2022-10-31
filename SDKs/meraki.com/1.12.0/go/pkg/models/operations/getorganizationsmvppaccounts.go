package operations



type GetOrganizationSmVppAccountsPathParams struct {
    OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
    
}

type GetOrganizationSmVppAccountsRequest struct {
    PathParams GetOrganizationSmVppAccountsPathParams 
    
}

type GetOrganizationSmVppAccountsResponse struct {
    ContentType string 
    StatusCode int64 
    GetOrganizationSmVppAccounts200ApplicationJSONObject map[string]interface{} 
    
}

