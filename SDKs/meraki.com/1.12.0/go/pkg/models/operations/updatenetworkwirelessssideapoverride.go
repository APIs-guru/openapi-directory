package operations

type UpdateNetworkWirelessSsidEapOverridePathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
	Number    string `pathParam:"style=simple,explode=false,name=number"`
}

type UpdateNetworkWirelessSsidEapOverrideRequestBodyEapolKey struct {
	Retries     *int64 `json:"retries"`
	TimeoutInMs *int64 `json:"timeoutInMs"`
}

type UpdateNetworkWirelessSsidEapOverrideRequestBodyIdentity struct {
	Retries *int64 `json:"retries"`
	Timeout *int64 `json:"timeout"`
}

type UpdateNetworkWirelessSsidEapOverrideRequestBody struct {
	EapolKey   *UpdateNetworkWirelessSsidEapOverrideRequestBodyEapolKey `json:"eapolKey"`
	Identity   *UpdateNetworkWirelessSsidEapOverrideRequestBodyIdentity `json:"identity"`
	MaxRetries *int64                                                   `json:"maxRetries"`
	Timeout    *int64                                                   `json:"timeout"`
}

type UpdateNetworkWirelessSsidEapOverrideRequest struct {
	PathParams UpdateNetworkWirelessSsidEapOverridePathParams
	Request    *UpdateNetworkWirelessSsidEapOverrideRequestBody `request:"mediaType=application/json"`
}

type UpdateNetworkWirelessSsidEapOverrideResponse struct {
	ContentType                                                  string
	StatusCode                                                   int64
	UpdateNetworkWirelessSsidEapOverride200ApplicationJSONObject map[string]interface{}
}
