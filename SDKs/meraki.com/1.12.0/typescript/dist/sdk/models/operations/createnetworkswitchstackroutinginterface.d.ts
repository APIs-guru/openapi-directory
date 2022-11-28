import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateNetworkSwitchStackRoutingInterfacePathParams extends SpeakeasyBase {
    networkId: string;
    switchStackId: string;
}
export declare enum CreateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum {
    Disabled = "disabled",
    Enabled = "enabled",
    IgmpSnoopingQuerier = "IGMP snooping querier"
}
/**
 * The OSPF routing settings of the interface.
**/
export declare class CreateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings extends SpeakeasyBase {
    area?: string;
    cost?: number;
    isPassiveEnabled?: boolean;
}
export declare class CreateNetworkSwitchStackRoutingInterfaceRequestBody extends SpeakeasyBase {
    defaultGateway?: string;
    interfaceIp: string;
    multicastRouting?: CreateNetworkSwitchStackRoutingInterfaceRequestBodyMulticastRoutingEnum;
    name: string;
    ospfSettings?: CreateNetworkSwitchStackRoutingInterfaceRequestBodyOspfSettings;
    subnet: string;
    vlanId: number;
}
export declare class CreateNetworkSwitchStackRoutingInterfaceRequest extends SpeakeasyBase {
    pathParams: CreateNetworkSwitchStackRoutingInterfacePathParams;
    request: CreateNetworkSwitchStackRoutingInterfaceRequestBody;
}
export declare class CreateNetworkSwitchStackRoutingInterfaceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createNetworkSwitchStackRoutingInterface201ApplicationJsonObject?: Map<string, any>;
}
