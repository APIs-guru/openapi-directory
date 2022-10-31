package operations

type UpdateNetworkSwitchQosRulePathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
	QosRuleID string `pathParam:"style=simple,explode=false,name=qosRuleId"`
}

type UpdateNetworkSwitchQosRuleRequestBodyProtocolEnum string

const (
	UpdateNetworkSwitchQosRuleRequestBodyProtocolEnumAny UpdateNetworkSwitchQosRuleRequestBodyProtocolEnum = "ANY"
	UpdateNetworkSwitchQosRuleRequestBodyProtocolEnumTCP UpdateNetworkSwitchQosRuleRequestBodyProtocolEnum = "TCP"
	UpdateNetworkSwitchQosRuleRequestBodyProtocolEnumUDP UpdateNetworkSwitchQosRuleRequestBodyProtocolEnum = "UDP"
)

type UpdateNetworkSwitchQosRuleRequestBody struct {
	Dscp         *int64                                             `json:"dscp,omitempty"`
	DstPort      *int64                                             `json:"dstPort,omitempty"`
	DstPortRange *string                                            `json:"dstPortRange,omitempty"`
	Protocol     *UpdateNetworkSwitchQosRuleRequestBodyProtocolEnum `json:"protocol,omitempty"`
	SrcPort      *int64                                             `json:"srcPort,omitempty"`
	SrcPortRange *string                                            `json:"srcPortRange,omitempty"`
	Vlan         *int64                                             `json:"vlan,omitempty"`
}

type UpdateNetworkSwitchQosRuleRequest struct {
	PathParams UpdateNetworkSwitchQosRulePathParams
	Request    *UpdateNetworkSwitchQosRuleRequestBody `request:"mediaType=application/json"`
}

type UpdateNetworkSwitchQosRuleResponse struct {
	ContentType                                        string
	StatusCode                                         int64
	UpdateNetworkSwitchQosRule200ApplicationJSONObject map[string]interface{}
}
