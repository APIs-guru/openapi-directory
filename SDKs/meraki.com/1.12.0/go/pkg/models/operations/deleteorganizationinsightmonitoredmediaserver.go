package operations



type DeleteOrganizationInsightMonitoredMediaServerPathParams struct {
    MonitoredMediaServerID string `pathParam:"style=simple,explode=false,name=monitoredMediaServerId"`
    OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
    
}

type DeleteOrganizationInsightMonitoredMediaServerRequest struct {
    PathParams DeleteOrganizationInsightMonitoredMediaServerPathParams 
    
}

type DeleteOrganizationInsightMonitoredMediaServerResponse struct {
    ContentType string 
    StatusCode int64 
    
}

