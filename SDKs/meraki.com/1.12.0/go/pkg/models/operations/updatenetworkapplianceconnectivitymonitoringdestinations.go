package operations

type UpdateNetworkApplianceConnectivityMonitoringDestinationsPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBodyDestinations struct {
	Default     *bool   `json:"default"`
	Description *string `json:"description"`
	IP          string  `json:"ip"`
}

type UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBody struct {
	Destinations []UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBodyDestinations `json:"destinations"`
}

type UpdateNetworkApplianceConnectivityMonitoringDestinationsRequest struct {
	PathParams UpdateNetworkApplianceConnectivityMonitoringDestinationsPathParams
	Request    *UpdateNetworkApplianceConnectivityMonitoringDestinationsRequestBody `request:"mediaType=application/json"`
}

type UpdateNetworkApplianceConnectivityMonitoringDestinationsResponse struct {
	ContentType                                                                      string
	StatusCode                                                                       int64
	UpdateNetworkApplianceConnectivityMonitoringDestinations200ApplicationJSONObject map[string]interface{}
}
