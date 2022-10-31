package operations



type CreateOrganizationRequestBody struct {
    Name string `json:"name"`
    
}

type CreateOrganizationRequest struct {
    Request CreateOrganizationRequestBody `request:"mediaType=application/json"`
    
}

type CreateOrganizationResponse struct {
    ContentType string 
    StatusCode int64 
    CreateOrganization201ApplicationJSONObject map[string]interface{} 
    
}

