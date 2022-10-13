package operations

type GetOrganizationInsightMonitoredMediaServersPathParams struct {
	OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
}

type GetOrganizationInsightMonitoredMediaServersRequest struct {
	PathParams GetOrganizationInsightMonitoredMediaServersPathParams
}

type GetOrganizationInsightMonitoredMediaServersResponse struct {
	ContentType                                                         string
	StatusCode                                                          int64
	GetOrganizationInsightMonitoredMediaServers200ApplicationJSONObject map[string]interface{}
}
