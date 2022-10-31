package operations



type GetOrganizationApplianceSecurityIntrusionPathParams struct {
    OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
    
}

type GetOrganizationApplianceSecurityIntrusionRequest struct {
    PathParams GetOrganizationApplianceSecurityIntrusionPathParams 
    
}

type GetOrganizationApplianceSecurityIntrusionResponse struct {
    ContentType string 
    StatusCode int64 
    GetOrganizationApplianceSecurityIntrusion200ApplicationJSONObject map[string]interface{} 
    
}

