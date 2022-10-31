package operations



type CombineOrganizationNetworksPathParams struct {
    OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
    
}

type CombineOrganizationNetworksRequestBody struct {
    EnrollmentString *string `json:"enrollmentString,omitempty"`
    Name string `json:"name"`
    NetworkIds []string `json:"networkIds"`
    
}

type CombineOrganizationNetworksRequest struct {
    PathParams CombineOrganizationNetworksPathParams 
    Request CombineOrganizationNetworksRequestBody `request:"mediaType=application/json"`
    
}

type CombineOrganizationNetworksResponse struct {
    ContentType string 
    StatusCode int64 
    CombineOrganizationNetworks200ApplicationJSONObject map[string]interface{} 
    
}

