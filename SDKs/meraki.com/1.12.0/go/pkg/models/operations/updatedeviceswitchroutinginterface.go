package operations

type UpdateDeviceSwitchRoutingInterfacePathParams struct {
	InterfaceID string `pathParam:"style=simple,explode=false,name=interfaceId"`
	Serial      string `pathParam:"style=simple,explode=false,name=serial"`
}

type UpdateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum string

const (
	UpdateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnumDisabled            UpdateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum = "disabled"
	UpdateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnumEnabled             UpdateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum = "enabled"
	UpdateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnumIgmpSnoopingQuerier UpdateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum = "IGMP snooping querier"
)

type UpdateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings struct {
	Area             *string `json:"area,omitempty"`
	Cost             *int64  `json:"cost,omitempty"`
	IsPassiveEnabled *bool   `json:"isPassiveEnabled,omitempty"`
}

type UpdateDeviceSwitchRoutingInterfaceRequestBody struct {
	InterfaceIP      *string                                                            `json:"interfaceIp,omitempty"`
	MulticastRouting *UpdateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum `json:"multicastRouting,omitempty"`
	Name             *string                                                            `json:"name,omitempty"`
	OspfSettings     *UpdateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings         `json:"ospfSettings,omitempty"`
	Subnet           *string                                                            `json:"subnet,omitempty"`
	VlanID           *int64                                                             `json:"vlanId,omitempty"`
}

type UpdateDeviceSwitchRoutingInterfaceRequest struct {
	PathParams UpdateDeviceSwitchRoutingInterfacePathParams
	Request    *UpdateDeviceSwitchRoutingInterfaceRequestBody `request:"mediaType=application/json"`
}

type UpdateDeviceSwitchRoutingInterfaceResponse struct {
	ContentType                                                string
	StatusCode                                                 int64
	UpdateDeviceSwitchRoutingInterface200ApplicationJSONObject map[string]interface{}
}
