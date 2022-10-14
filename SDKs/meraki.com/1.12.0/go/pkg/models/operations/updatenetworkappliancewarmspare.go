package operations

type UpdateNetworkApplianceWarmSparePathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type UpdateNetworkApplianceWarmSpareRequestBody struct {
	Enabled     bool    `json:"enabled"`
	SpareSerial *string `json:"spareSerial,omitempty"`
	UplinkMode  *string `json:"uplinkMode,omitempty"`
	VirtualIp1  *string `json:"virtualIp1,omitempty"`
	VirtualIp2  *string `json:"virtualIp2,omitempty"`
}

type UpdateNetworkApplianceWarmSpareRequest struct {
	PathParams UpdateNetworkApplianceWarmSparePathParams
	Request    UpdateNetworkApplianceWarmSpareRequestBody `request:"mediaType=application/json"`
}

type UpdateNetworkApplianceWarmSpareResponse struct {
	ContentType                                             string
	StatusCode                                              int64
	UpdateNetworkApplianceWarmSpare200ApplicationJSONObject map[string]interface{}
}
