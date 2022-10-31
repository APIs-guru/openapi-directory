package operations

type GetNetworkGroupPolicyPathParams struct {
	GroupPolicyID string `pathParam:"style=simple,explode=false,name=groupPolicyId"`
	NetworkID     string `pathParam:"style=simple,explode=false,name=networkId"`
}

type GetNetworkGroupPolicyRequest struct {
	PathParams GetNetworkGroupPolicyPathParams
}

type GetNetworkGroupPolicyResponse struct {
	ContentType                                   string
	StatusCode                                    int64
	GetNetworkGroupPolicy200ApplicationJSONObject map[string]interface{}
}
