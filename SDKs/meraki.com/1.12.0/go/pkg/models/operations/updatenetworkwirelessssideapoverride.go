package operations

type UpdateNetworkWirelessSsidEapOverridePathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
	Number    string `pathParam:"style=simple,explode=false,name=number"`
}

type UpdateNetworkWirelessSsidEapOverrideRequestBodyEapolKey struct {
	Retries     *int64 `json:"retries,omitempty"`
	TimeoutInMs *int64 `json:"timeoutInMs,omitempty"`
}

type UpdateNetworkWirelessSsidEapOverrideRequestBodyIdentity struct {
	Retries *int64 `json:"retries,omitempty"`
	Timeout *int64 `json:"timeout,omitempty"`
}

type UpdateNetworkWirelessSsidEapOverrideRequestBody struct {
	EapolKey   *UpdateNetworkWirelessSsidEapOverrideRequestBodyEapolKey `json:"eapolKey,omitempty"`
	Identity   *UpdateNetworkWirelessSsidEapOverrideRequestBodyIdentity `json:"identity,omitempty"`
	MaxRetries *int64                                                   `json:"maxRetries,omitempty"`
	Timeout    *int64                                                   `json:"timeout,omitempty"`
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
