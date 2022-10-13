package operations

type CreateDeviceSwitchRoutingInterfacePathParams struct {
	Serial string `pathParam:"style=simple,explode=false,name=serial"`
}

type CreateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum string

const (
	CreateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnumDisabled            CreateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum = "disabled"
	CreateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnumEnabled             CreateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum = "enabled"
	CreateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnumIgmpSnoopingQuerier CreateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum = "IGMP snooping querier"
)

type CreateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings struct {
	Area             *string `json:"area"`
	Cost             *int64  `json:"cost"`
	IsPassiveEnabled *bool   `json:"isPassiveEnabled"`
}

type CreateDeviceSwitchRoutingInterfaceRequestBody struct {
	DefaultGateway   *string                                                            `json:"defaultGateway"`
	InterfaceIP      string                                                             `json:"interfaceIp"`
	MulticastRouting *CreateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum `json:"multicastRouting"`
	Name             string                                                             `json:"name"`
	OspfSettings     *CreateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings         `json:"ospfSettings"`
	Subnet           *string                                                            `json:"subnet"`
	VlanID           int64                                                              `json:"vlanId"`
}

type CreateDeviceSwitchRoutingInterfaceRequest struct {
	PathParams CreateDeviceSwitchRoutingInterfacePathParams
	Request    CreateDeviceSwitchRoutingInterfaceRequestBody `request:"mediaType=application/json"`
}

type CreateDeviceSwitchRoutingInterfaceResponse struct {
	ContentType                                                string
	StatusCode                                                 int64
	CreateDeviceSwitchRoutingInterface201ApplicationJSONObject map[string]interface{}
}
