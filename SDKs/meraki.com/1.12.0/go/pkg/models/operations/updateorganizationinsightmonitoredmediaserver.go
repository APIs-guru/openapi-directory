package operations

type UpdateOrganizationInsightMonitoredMediaServerPathParams struct {
	MonitoredMediaServerID string `pathParam:"style=simple,explode=false,name=monitoredMediaServerId"`
	OrganizationID         string `pathParam:"style=simple,explode=false,name=organizationId"`
}

type UpdateOrganizationInsightMonitoredMediaServerRequestBody struct {
	Address                     *string `json:"address"`
	BestEffortMonitoringEnabled *bool   `json:"bestEffortMonitoringEnabled"`
	Name                        *string `json:"name"`
}

type UpdateOrganizationInsightMonitoredMediaServerRequest struct {
	PathParams UpdateOrganizationInsightMonitoredMediaServerPathParams
	Request    *UpdateOrganizationInsightMonitoredMediaServerRequestBody `request:"mediaType=application/json"`
}

type UpdateOrganizationInsightMonitoredMediaServerResponse struct {
	ContentType                                                           string
	StatusCode                                                            int64
	UpdateOrganizationInsightMonitoredMediaServer200ApplicationJSONObject map[string]interface{}
}
