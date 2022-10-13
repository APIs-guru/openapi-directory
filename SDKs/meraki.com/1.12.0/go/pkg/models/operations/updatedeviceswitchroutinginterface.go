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
	Area             *string `json:"area"`
	Cost             *int64  `json:"cost"`
	IsPassiveEnabled *bool   `json:"isPassiveEnabled"`
}

type UpdateDeviceSwitchRoutingInterfaceRequestBody struct {
	InterfaceIP      *string                                                            `json:"interfaceIp"`
	MulticastRouting *UpdateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum `json:"multicastRouting"`
	Name             *string                                                            `json:"name"`
	OspfSettings     *UpdateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings         `json:"ospfSettings"`
	Subnet           *string                                                            `json:"subnet"`
	VlanID           *int64                                                             `json:"vlanId"`
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
