import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateDeviceSwitchRoutingStaticRoutePathParams extends SpeakeasyBase {
    serial: string;
}
export declare class CreateDeviceSwitchRoutingStaticRouteRequestBody extends SpeakeasyBase {
    advertiseViaOspfEnabled?: boolean;
    name?: string;
    nextHopIp: string;
    preferOverOspfRoutesEnabled?: boolean;
    subnet: string;
}
export declare class CreateDeviceSwitchRoutingStaticRouteRequest extends SpeakeasyBase {
    pathParams: CreateDeviceSwitchRoutingStaticRoutePathParams;
    request: CreateDeviceSwitchRoutingStaticRouteRequestBody;
}
export declare class CreateDeviceSwitchRoutingStaticRouteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createDeviceSwitchRoutingStaticRoute201ApplicationJsonObject?: Map<string, any>;
}
