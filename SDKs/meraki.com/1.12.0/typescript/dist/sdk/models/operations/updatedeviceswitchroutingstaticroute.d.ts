import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateDeviceSwitchRoutingStaticRoutePathParams extends SpeakeasyBase {
    serial: string;
    staticRouteId: string;
}
export declare class UpdateDeviceSwitchRoutingStaticRouteRequestBody extends SpeakeasyBase {
    advertiseViaOspfEnabled?: boolean;
    name?: string;
    nextHopIp?: string;
    preferOverOspfRoutesEnabled?: boolean;
    subnet?: string;
}
export declare class UpdateDeviceSwitchRoutingStaticRouteRequest extends SpeakeasyBase {
    pathParams: UpdateDeviceSwitchRoutingStaticRoutePathParams;
    request?: UpdateDeviceSwitchRoutingStaticRouteRequestBody;
}
export declare class UpdateDeviceSwitchRoutingStaticRouteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateDeviceSwitchRoutingStaticRoute200ApplicationJsonObject?: Map<string, any>;
}
