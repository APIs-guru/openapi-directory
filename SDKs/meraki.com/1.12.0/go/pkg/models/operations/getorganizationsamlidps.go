package operations



type GetOrganizationSamlIdpsPathParams struct {
    OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
    
}

type GetOrganizationSamlIdpsRequest struct {
    PathParams GetOrganizationSamlIdpsPathParams 
    
}

type GetOrganizationSamlIdpsResponse struct {
    ContentType string 
    StatusCode int64 
    GetOrganizationSamlIdps200ApplicationJSONObject map[string]interface{} 
    
}

