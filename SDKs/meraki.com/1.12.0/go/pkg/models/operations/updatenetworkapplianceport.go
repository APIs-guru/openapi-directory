package operations

type UpdateNetworkAppliancePortPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
	PortID    string `pathParam:"style=simple,explode=false,name=portId"`
}

type UpdateNetworkAppliancePortRequestBody struct {
	AccessPolicy        *string `json:"accessPolicy"`
	AllowedVlans        *string `json:"allowedVlans"`
	DropUntaggedTraffic *bool   `json:"dropUntaggedTraffic"`
	Enabled             *bool   `json:"enabled"`
	Type                *string `json:"type"`
	Vlan                *int64  `json:"vlan"`
}

type UpdateNetworkAppliancePortRequest struct {
	PathParams UpdateNetworkAppliancePortPathParams
	Request    *UpdateNetworkAppliancePortRequestBody `request:"mediaType=application/json"`
}

type UpdateNetworkAppliancePortResponse struct {
	ContentType                                        string
	StatusCode                                         int64
	UpdateNetworkAppliancePort200ApplicationJSONObject map[string]interface{}
}
