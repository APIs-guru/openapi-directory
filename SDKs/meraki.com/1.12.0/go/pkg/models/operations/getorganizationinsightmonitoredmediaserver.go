package operations

type GetOrganizationInsightMonitoredMediaServerPathParams struct {
	MonitoredMediaServerID string `pathParam:"style=simple,explode=false,name=monitoredMediaServerId"`
	OrganizationID         string `pathParam:"style=simple,explode=false,name=organizationId"`
}

type GetOrganizationInsightMonitoredMediaServerRequest struct {
	PathParams GetOrganizationInsightMonitoredMediaServerPathParams
}

type GetOrganizationInsightMonitoredMediaServerResponse struct {
	ContentType                                                        string
	StatusCode                                                         int64
	GetOrganizationInsightMonitoredMediaServer200ApplicationJSONObject map[string]interface{}
}
