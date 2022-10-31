package operations



type GetOrganizationSmVppAccountPathParams struct {
    OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
    VppAccountID string `pathParam:"style=simple,explode=false,name=vppAccountId"`
    
}

type GetOrganizationSmVppAccountRequest struct {
    PathParams GetOrganizationSmVppAccountPathParams 
    
}

type GetOrganizationSmVppAccountResponse struct {
    ContentType string 
    StatusCode int64 
    GetOrganizationSmVppAccount200ApplicationJSONObject map[string]interface{} 
    
}

