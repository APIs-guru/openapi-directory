package operations



type UpdateOrganizationInsightMonitoredMediaServerPathParams struct {
    MonitoredMediaServerID string `pathParam:"style=simple,explode=false,name=monitoredMediaServerId"`
    OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
    
}

type UpdateOrganizationInsightMonitoredMediaServerRequestBody struct {
    Address *string `json:"address,omitempty"`
    BestEffortMonitoringEnabled *bool `json:"bestEffortMonitoringEnabled,omitempty"`
    Name *string `json:"name,omitempty"`
    
}

type UpdateOrganizationInsightMonitoredMediaServerRequest struct {
    PathParams UpdateOrganizationInsightMonitoredMediaServerPathParams 
    Request *UpdateOrganizationInsightMonitoredMediaServerRequestBody `request:"mediaType=application/json"`
    
}

type UpdateOrganizationInsightMonitoredMediaServerResponse struct {
    ContentType string 
    StatusCode int64 
    UpdateOrganizationInsightMonitoredMediaServer200ApplicationJSONObject map[string]interface{} 
    
}

