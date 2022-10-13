package operations

type UpdateNetworkSwitchDhcpServerPolicyPathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type UpdateNetworkSwitchDhcpServerPolicyRequestBodyDefaultPolicyEnum string

const (
	UpdateNetworkSwitchDhcpServerPolicyRequestBodyDefaultPolicyEnumAllow UpdateNetworkSwitchDhcpServerPolicyRequestBodyDefaultPolicyEnum = "allow"
	UpdateNetworkSwitchDhcpServerPolicyRequestBodyDefaultPolicyEnumBlock UpdateNetworkSwitchDhcpServerPolicyRequestBodyDefaultPolicyEnum = "block"
)

type UpdateNetworkSwitchDhcpServerPolicyRequestBody struct {
	AllowedServers []string                                                         `json:"allowedServers"`
	BlockedServers []string                                                         `json:"blockedServers"`
	DefaultPolicy  *UpdateNetworkSwitchDhcpServerPolicyRequestBodyDefaultPolicyEnum `json:"defaultPolicy"`
}

type UpdateNetworkSwitchDhcpServerPolicyRequest struct {
	PathParams UpdateNetworkSwitchDhcpServerPolicyPathParams
	Request    *UpdateNetworkSwitchDhcpServerPolicyRequestBody `request:"mediaType=application/json"`
}

type UpdateNetworkSwitchDhcpServerPolicyResponse struct {
	ContentType                                                 string
	StatusCode                                                  int64
	UpdateNetworkSwitchDhcpServerPolicy200ApplicationJSONObject map[string]interface{}
}
