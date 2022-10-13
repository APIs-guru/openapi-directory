package operations

type UpdateNetworkSwitchStackRoutingInterfacePathParams struct {
	InterfaceID   string `pathParam:"style=simple,explode=false,name=interfaceId"`
	NetworkID     string `pathParam:"style=simple,explode=false,name=networkId"`
	SwitchStackID string `pathParam:"style=simple,explode=false,name=switchStackId"`
}

type UpdateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum string

const (
	UpdateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnumDisabled            UpdateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum = "disabled"
	UpdateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnumEnabled             UpdateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum = "enabled"
	UpdateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnumIgmpSnoopingQuerier UpdateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum = "IGMP snooping querier"
)

type UpdateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings struct {
	Area             *string `json:"area"`
	Cost             *int64  `json:"cost"`
	IsPassiveEnabled *bool   `json:"isPassiveEnabled"`
}

type UpdateNetworkSwitchStackRoutingInterfaceRequestBody struct {
	InterfaceIP      *string                                                                  `json:"interfaceIp"`
	MulticastRouting *UpdateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum `json:"multicastRouting"`
	Name             *string                                                                  `json:"name"`
	OspfSettings     *UpdateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings         `json:"ospfSettings"`
	Subnet           *string                                                                  `json:"subnet"`
	VlanID           *int64                                                                   `json:"vlanId"`
}

type UpdateNetworkSwitchStackRoutingInterfaceRequest struct {
	PathParams UpdateNetworkSwitchStackRoutingInterfacePathParams
	Request    *UpdateNetworkSwitchStackRoutingInterfaceRequestBody `request:"mediaType=application/json"`
}

type UpdateNetworkSwitchStackRoutingInterfaceResponse struct {
	ContentType                                                      string
	StatusCode                                                       int64
	UpdateNetworkSwitchStackRoutingInterface200ApplicationJSONObject map[string]interface{}
}
