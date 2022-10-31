package operations



type GetOrganizationAdaptivePolicySettingsPathParams struct {
    OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
    
}

type GetOrganizationAdaptivePolicySettingsRequest struct {
    PathParams GetOrganizationAdaptivePolicySettingsPathParams 
    
}

type GetOrganizationAdaptivePolicySettingsResponse struct {
    ContentType string 
    StatusCode int64 
    GetOrganizationAdaptivePolicySettings200ApplicationJSONObject map[string]interface{} 
    
}

