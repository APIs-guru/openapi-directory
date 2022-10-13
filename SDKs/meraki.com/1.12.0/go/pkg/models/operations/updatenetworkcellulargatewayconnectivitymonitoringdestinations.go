package operations

type UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBodyDestinations struct {
	Default     *bool   `json:"default"`
	Description *string `json:"description"`
	IP          string  `json:"ip"`
}

type UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBody struct {
	Destinations []UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBodyDestinations `json:"destinations"`
}

type UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequest struct {
	PathParams UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsPathParams
	Request    *UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsRequestBody `request:"mediaType=application/json"`
}

type UpdateNetworkCellularGatewayConnectivityMonitoringDestinationsResponse struct {
	ContentType                                                                            string
	StatusCode                                                                             int64
	UpdateNetworkCellularGatewayConnectivityMonitoringDestinations200ApplicationJSONObject map[string]interface{}
}
