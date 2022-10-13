package operations

type CreateNetworkApplianceVlanPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type CreateNetworkApplianceVlanRequestBody struct {
	ApplianceIP   *string `json:"applianceIp"`
	GroupPolicyID *string `json:"groupPolicyId"`
	ID            string  `json:"id"`
	Name          string  `json:"name"`
	Subnet        *string `json:"subnet"`
}

type CreateNetworkApplianceVlanRequest struct {
	PathParams CreateNetworkApplianceVlanPathParams
	Request    CreateNetworkApplianceVlanRequestBody `request:"mediaType=application/json"`
}

type CreateNetworkApplianceVlanResponse struct {
	ContentType                                        string
	StatusCode                                         int64
	CreateNetworkApplianceVlan201ApplicationJSONObject map[string]interface{}
}
