package operations

type UpdateNetworkClientPolicyPathParams struct {
	ClientID  string `pathParam:"style=simple,explode=false,name=clientId"`
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type UpdateNetworkClientPolicyRequestBody struct {
	DevicePolicy  string  `json:"devicePolicy"`
	GroupPolicyID *string `json:"groupPolicyId,omitempty"`
}

type UpdateNetworkClientPolicyRequest struct {
	PathParams UpdateNetworkClientPolicyPathParams
	Request    UpdateNetworkClientPolicyRequestBody `request:"mediaType=application/json"`
}

type UpdateNetworkClientPolicyResponse struct {
	ContentType                                       string
	StatusCode                                        int64
	UpdateNetworkClientPolicy200ApplicationJSONObject map[string]interface{}
}
