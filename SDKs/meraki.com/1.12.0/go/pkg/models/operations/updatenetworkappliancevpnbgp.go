package operations

type UpdateNetworkApplianceVpnBgpPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type UpdateNetworkApplianceVpnBgpRequestBodyNeighbors struct {
	AllowTransit   *bool  `json:"allowTransit,omitempty"`
	EbgpHoldTimer  int64  `json:"ebgpHoldTimer"`
	EbgpMultihop   int64  `json:"ebgpMultihop"`
	IP             string `json:"ip"`
	ReceiveLimit   *int64 `json:"receiveLimit,omitempty"`
	RemoteAsNumber int64  `json:"remoteAsNumber"`
}

type UpdateNetworkApplianceVpnBgpRequestBody struct {
	AsNumber      *int64                                             `json:"asNumber,omitempty"`
	Enabled       bool                                               `json:"enabled"`
	IbgpHoldTimer *int64                                             `json:"ibgpHoldTimer,omitempty"`
	Neighbors     []UpdateNetworkApplianceVpnBgpRequestBodyNeighbors `json:"neighbors,omitempty"`
}

type UpdateNetworkApplianceVpnBgpRequest struct {
	PathParams UpdateNetworkApplianceVpnBgpPathParams
	Request    UpdateNetworkApplianceVpnBgpRequestBody `request:"mediaType=application/json"`
}

type UpdateNetworkApplianceVpnBgpResponse struct {
	ContentType                                          string
	StatusCode                                           int64
	UpdateNetworkApplianceVpnBgp200ApplicationJSONObject map[string]interface{}
}
