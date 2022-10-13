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
	Dscp         *int64                                             `json:"dscp"`
	DstPort      *int64                                             `json:"dstPort"`
	DstPortRange *string                                            `json:"dstPortRange"`
	Protocol     *UpdateNetworkSwitchQosRuleRequestBodyProtocolEnum `json:"protocol"`
	SrcPort      *int64                                             `json:"srcPort"`
	SrcPortRange *string                                            `json:"srcPortRange"`
	Vlan         *int64                                             `json:"vlan"`
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
