import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateDeviceSwitchRoutingInterfacePathParams extends SpeakeasyBase {
    serial: string;
}
export declare enum CreateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum {
    Disabled = "disabled",
    Enabled = "enabled",
    IgmpSnoopingQuerier = "IGMP snooping querier"
}
/**
 * The OSPF routing settings of the interface.
**/
export declare class CreateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings extends SpeakeasyBase {
    area?: string;
    cost?: number;
    isPassiveEnabled?: boolean;
}
export declare class CreateDeviceSwitchRoutingInterfaceRequestBody extends SpeakeasyBase {
    defaultGateway?: string;
    interfaceIp: string;
    multicastRouting?: CreateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum;
    name: string;
    ospfSettings?: CreateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings;
    subnet?: string;
    vlanId: number;
}
export declare class CreateDeviceSwitchRoutingInterfaceRequest extends SpeakeasyBase {
    pathParams: CreateDeviceSwitchRoutingInterfacePathParams;
    request: CreateDeviceSwitchRoutingInterfaceRequestBody;
}
export declare class CreateDeviceSwitchRoutingInterfaceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createDeviceSwitchRoutingInterface201ApplicationJsonObject?: Map<string, any>;
}
