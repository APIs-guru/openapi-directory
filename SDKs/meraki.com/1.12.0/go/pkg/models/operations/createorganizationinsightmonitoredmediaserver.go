package operations



type CreateOrganizationInsightMonitoredMediaServerPathParams struct {
    OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
    
}

type CreateOrganizationInsightMonitoredMediaServerRequestBody struct {
    Address string `json:"address"`
    BestEffortMonitoringEnabled *bool `json:"bestEffortMonitoringEnabled,omitempty"`
    Name string `json:"name"`
    
}

type CreateOrganizationInsightMonitoredMediaServerRequest struct {
    PathParams CreateOrganizationInsightMonitoredMediaServerPathParams 
    Request CreateOrganizationInsightMonitoredMediaServerRequestBody `request:"mediaType=application/json"`
    
}

type CreateOrganizationInsightMonitoredMediaServerResponse struct {
    ContentType string 
    StatusCode int64 
    CreateOrganizationInsightMonitoredMediaServer201ApplicationJSONObject map[string]interface{} 
    
}

