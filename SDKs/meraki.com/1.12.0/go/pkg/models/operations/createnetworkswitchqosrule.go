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
	Dscp         *int64                                             `json:"dscp"`
	DstPort      *int64                                             `json:"dstPort"`
	DstPortRange *string                                            `json:"dstPortRange"`
	Protocol     *CreateNetworkSwitchQosRuleRequestBodyProtocolEnum `json:"protocol"`
	SrcPort      *int64                                             `json:"srcPort"`
	SrcPortRange *string                                            `json:"srcPortRange"`
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
