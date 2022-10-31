package operations



type GetOrganizationInventoryDevicePathParams struct {
    OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
    Serial string `pathParam:"style=simple,explode=false,name=serial"`
    
}

type GetOrganizationInventoryDeviceRequest struct {
    PathParams GetOrganizationInventoryDevicePathParams 
    
}

type GetOrganizationInventoryDeviceResponse struct {
    ContentType string 
    StatusCode int64 
    GetOrganizationInventoryDevice200ApplicationJSONObject map[string]interface{} 
    
}

