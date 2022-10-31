package operations



type UpdateNetworkSwitchStackRoutingInterfacePathParams struct {
    InterfaceID string `pathParam:"style=simple,explode=false,name=interfaceId"`
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    SwitchStackID string `pathParam:"style=simple,explode=false,name=switchStackId"`
    
}


type UpdateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum string

const (
    UpdateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnumDisabled UpdateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum = "disabled"
UpdateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnumEnabled UpdateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum = "enabled"
UpdateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnumIgmpSnoopingQuerier UpdateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum = "IGMP snooping querier"
)


type UpdateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings struct {
    Area *string `json:"area,omitempty"`
    Cost *int64 `json:"cost,omitempty"`
    IsPassiveEnabled *bool `json:"isPassiveEnabled,omitempty"`
    
}

type UpdateNetworkSwitchStackRoutingInterfaceRequestBody struct {
    InterfaceIP *string `json:"interfaceIp,omitempty"`
    MulticastRouting *UpdateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum `json:"multicastRouting,omitempty"`
    Name *string `json:"name,omitempty"`
    OspfSettings *UpdateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings `json:"ospfSettings,omitempty"`
    Subnet *string `json:"subnet,omitempty"`
    VlanID *int64 `json:"vlanId,omitempty"`
    
}

type UpdateNetworkSwitchStackRoutingInterfaceRequest struct {
    PathParams UpdateNetworkSwitchStackRoutingInterfacePathParams 
    Request *UpdateNetworkSwitchStackRoutingInterfaceRequestBody `request:"mediaType=application/json"`
    
}

type UpdateNetworkSwitchStackRoutingInterfaceResponse struct {
    ContentType string 
    StatusCode int64 
    UpdateNetworkSwitchStackRoutingInterface200ApplicationJSONObject map[string]interface{} 
    
}

