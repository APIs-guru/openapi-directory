package operations



type GetOrganizationSnmpPathParams struct {
    OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
    
}

type GetOrganizationSnmpRequest struct {
    PathParams GetOrganizationSnmpPathParams 
    
}

type GetOrganizationSnmpResponse struct {
    ContentType string 
    StatusCode int64 
    GetOrganizationSnmp200ApplicationJSONObject map[string]interface{} 
    
}

