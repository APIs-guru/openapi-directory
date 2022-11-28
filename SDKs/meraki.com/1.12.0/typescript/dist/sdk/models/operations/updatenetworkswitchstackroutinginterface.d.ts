import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkSwitchStackRoutingInterfacePathParams extends SpeakeasyBase {
    interfaceId: string;
    networkId: string;
    switchStackId: string;
}
export declare enum UpdateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum {
    Disabled = "disabled",
    Enabled = "enabled",
    IgmpSnoopingQuerier = "IGMP snooping querier"
}
/**
 * The OSPF routing settings of the interface.
**/
export declare class UpdateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings extends SpeakeasyBase {
    area?: string;
    cost?: number;
    isPassiveEnabled?: boolean;
}
export declare class UpdateNetworkSwitchStackRoutingInterfaceRequestBody extends SpeakeasyBase {
    interfaceIp?: string;
    multicastRouting?: UpdateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum;
    name?: string;
    ospfSettings?: UpdateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings;
    subnet?: string;
    vlanId?: number;
}
export declare class UpdateNetworkSwitchStackRoutingInterfaceRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkSwitchStackRoutingInterfacePathParams;
    request?: UpdateNetworkSwitchStackRoutingInterfaceRequestBody;
}
export declare class UpdateNetworkSwitchStackRoutingInterfaceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkSwitchStackRoutingInterface200ApplicationJsonObject?: Map<string, any>;
}
