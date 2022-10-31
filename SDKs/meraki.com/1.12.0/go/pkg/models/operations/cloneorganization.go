package operations



type CloneOrganizationPathParams struct {
    OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
    
}

type CloneOrganizationRequestBody struct {
    Name string `json:"name"`
    
}

type CloneOrganizationRequest struct {
    PathParams CloneOrganizationPathParams 
    Request CloneOrganizationRequestBody `request:"mediaType=application/json"`
    
}

type CloneOrganizationResponse struct {
    ContentType string 
    StatusCode int64 
    CloneOrganization201ApplicationJSONObject map[string]interface{} 
    
}

