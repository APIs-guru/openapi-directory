package operations

type CreateNetworkSwitchStackRoutingInterfacePathParams struct {
	NetworkID     string `pathParam:"style=simple,explode=false,name=networkId"`
	SwitchStackID string `pathParam:"style=simple,explode=false,name=switchStackId"`
}

type CreateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum string

const (
	CreateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnumDisabled            CreateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum = "disabled"
	CreateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnumEnabled             CreateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum = "enabled"
	CreateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnumIgmpSnoopingQuerier CreateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum = "IGMP snooping querier"
)

type CreateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings struct {
	Area             *string `json:"area"`
	Cost             *int64  `json:"cost"`
	IsPassiveEnabled *bool   `json:"isPassiveEnabled"`
}

type CreateNetworkSwitchStackRoutingInterfaceRequestBody struct {
	DefaultGateway   *string                                                                  `json:"defaultGateway"`
	InterfaceIP      string                                                                   `json:"interfaceIp"`
	MulticastRouting *CreateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum `json:"multicastRouting"`
	Name             string                                                                   `json:"name"`
	OspfSettings     *CreateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings         `json:"ospfSettings"`
	Subnet           string                                                                   `json:"subnet"`
	VlanID           int64                                                                    `json:"vlanId"`
}

type CreateNetworkSwitchStackRoutingInterfaceRequest struct {
	PathParams CreateNetworkSwitchStackRoutingInterfacePathParams
	Request    CreateNetworkSwitchStackRoutingInterfaceRequestBody `request:"mediaType=application/json"`
}

type CreateNetworkSwitchStackRoutingInterfaceResponse struct {
	ContentType                                                      string
	StatusCode                                                       int64
	CreateNetworkSwitchStackRoutingInterface201ApplicationJSONObject map[string]interface{}
}
