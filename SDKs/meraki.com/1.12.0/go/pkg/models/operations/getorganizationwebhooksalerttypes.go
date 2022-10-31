package operations

type GetOrganizationWebhooksAlertTypesPathParams struct {
	OrganizationID string `pathParam:"style=simple,explode=false,name=organizationId"`
}

type GetOrganizationWebhooksAlertTypesRequest struct {
	PathParams GetOrganizationWebhooksAlertTypesPathParams
}

type GetOrganizationWebhooksAlertTypesResponse struct {
	ContentType                                               string
	StatusCode                                                int64
	GetOrganizationWebhooksAlertTypes200ApplicationJSONObject map[string]interface{}
}
