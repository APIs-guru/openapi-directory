package operations

type CreateNetworkSwitchQosRulePathParams struct {
	NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
}

type CreateNetworkSwitchQosRuleRequestBodyProtocolEnum string

const (
	CreateNetworkSwitchQosRuleRequestBodyProtocolEnumAny CreateNetworkSwitchQosRuleRequestBodyProtocolEnum = "ANY"
	CreateNetworkSwitchQosRuleRequestBodyProtocolEnumTCP CreateNetworkSwitchQosRuleRequestBodyProtocolEnum = "TCP"
	CreateNetworkSwitchQosRuleRequestBodyProtocolEnumUDP CreateNetworkSwitchQosRuleRequestBodyProtocolEnum = "UDP"
)

type CreateNetworkSwitchQosRuleRequestBody struct {
	Dscp         *int64                                             `json:"dscp,omitempty"`
	DstPort      *int64                                             `json:"dstPort,omitempty"`
	DstPortRange *string                                            `json:"dstPortRange,omitempty"`
	Protocol     *CreateNetworkSwitchQosRuleRequestBodyProtocolEnum `json:"protocol,omitempty"`
	SrcPort      *int64                                             `json:"srcPort,omitempty"`
	SrcPortRange *string                                            `json:"srcPortRange,omitempty"`
	Vlan         int64                                              `json:"vlan"`
}

type CreateNetworkSwitchQosRuleRequest struct {
	PathParams CreateNetworkSwitchQosRulePathParams
	Request    CreateNetworkSwitchQosRuleRequestBody `request:"mediaType=application/json"`
}

type CreateNetworkSwitchQosRuleResponse struct {
	ContentType                                        string
	StatusCode                                         int64
	CreateNetworkSwitchQosRule201ApplicationJSONObject map[string]interface{}
}
