package operations



type UpdateOrganizationCameraOnboardingStatusesPathParams struct {
    OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
    
}

type UpdateOrganizationCameraOnboardingStatusesRequestBody struct {
    Serial *string `json:"serial,omitempty"`
    WirelessCredentialsSent *bool `json:"wirelessCredentialsSent,omitempty"`
    
}

type UpdateOrganizationCameraOnboardingStatusesRequest struct {
    PathParams UpdateOrganizationCameraOnboardingStatusesPathParams 
    Request *UpdateOrganizationCameraOnboardingStatusesRequestBody `request:"mediaType=application/json"`
    
}

type UpdateOrganizationCameraOnboardingStatusesResponse struct {
    ContentType string 
    StatusCode int64 
    UpdateOrganizationCameraOnboardingStatuses200ApplicationJSONObject map[string]interface{} 
    
}

