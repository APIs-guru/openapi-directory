import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateDeviceSwitchRoutingInterfacePathParams extends SpeakeasyBase {
    interfaceId: string;
    serial: string;
}
export declare enum UpdateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum {
    Disabled = "disabled",
    Enabled = "enabled",
    IgmpSnoopingQuerier = "IGMP snooping querier"
}
/**
 * The OSPF routing settings of the interface.
**/
export declare class UpdateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings extends SpeakeasyBase {
    area?: string;
    cost?: number;
    isPassiveEnabled?: boolean;
}
export declare class UpdateDeviceSwitchRoutingInterfaceRequestBody extends SpeakeasyBase {
    interfaceIp?: string;
    multicastRouting?: UpdateDeviceSwitchRoutingInterfaceRequestBodyMulticastRoutingEnum;
    name?: string;
    ospfSettings?: UpdateDeviceSwitchRoutingInterfaceRequestBodyOspfSettings;
    subnet?: string;
    vlanId?: number;
}
export declare class UpdateDeviceSwitchRoutingInterfaceRequest extends SpeakeasyBase {
    pathParams: UpdateDeviceSwitchRoutingInterfacePathParams;
    request?: UpdateDeviceSwitchRoutingInterfaceRequestBody;
}
export declare class UpdateDeviceSwitchRoutingInterfaceResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateDeviceSwitchRoutingInterface200ApplicationJsonObject?: Map<string, any>;
}
