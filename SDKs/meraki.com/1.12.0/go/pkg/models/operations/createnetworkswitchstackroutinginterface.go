package operations



type CreateNetworkSwitchStackRoutingInterfacePathParams struct {
    NetworkID string `pathParam:"style=simple,explode=false,name=networkId"`
    SwitchStackID string `pathParam:"style=simple,explode=false,name=switchStackId"`
    
}


type CreateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum string

const (
    CreateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnumDisabled CreateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum = "disabled"
CreateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnumEnabled CreateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum = "enabled"
CreateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnumIgmpSnoopingQuerier CreateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum = "IGMP snooping querier"
)


type CreateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings struct {
    Area *string `json:"area,omitempty"`
    Cost *int64 `json:"cost,omitempty"`
    IsPassiveEnabled *bool `json:"isPassiveEnabled,omitempty"`
    
}

type CreateNetworkSwitchStackRoutingInterfaceRequestBody struct {
    DefaultGateway *string `json:"defaultGateway,omitempty"`
    InterfaceIP string `json:"interfaceIp"`
    MulticastRouting *CreateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum `json:"multicastRouting,omitempty"`
    Name string `json:"name"`
    OspfSettings *CreateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings `json:"ospfSettings,omitempty"`
    Subnet string `json:"subnet"`
    VlanID int64 `json:"vlanId"`
    
}

type CreateNetworkSwitchStackRoutingInterfaceRequest struct {
    PathParams CreateNetworkSwitchStackRoutingInterfacePathParams 
    Request CreateNetworkSwitchStackRoutingInterfaceRequestBody `request:"mediaType=application/json"`
    
}

type CreateNetworkSwitchStackRoutingInterfaceResponse struct {
    ContentType string 
    StatusCode int64 
    CreateNetworkSwitchStackRoutingInterface201ApplicationJSONObject map[string]interface{} 
    
}

