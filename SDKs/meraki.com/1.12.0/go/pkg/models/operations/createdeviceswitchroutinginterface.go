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
	Area             *string `json:"area,omitempty"`
	Cost             *int64  `json:"cost,omitempty"`
	IsPassiveEnabled *bool   `json:"isPassiveEnabled,omitempty"`
}

type CreateDeviceSwitchRoutingInterfaceRequestBody struct {
	DefaultGateway   *string                                                            `json:"defaultGateway,omitempty"`
	InterfaceIP      string                                                             `json:"interfaceIp"`
	MulticastRouting *CreateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum `json:"multicastRouting,omitempty"`
	Name             string                                                             `json:"name"`
	OspfSettings     *CreateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings         `json:"ospfSettings,omitempty"`
	Subnet           *string                                                            `json:"subnet,omitempty"`
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
