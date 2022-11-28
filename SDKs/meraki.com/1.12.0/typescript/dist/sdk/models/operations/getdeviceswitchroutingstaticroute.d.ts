import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetDeviceSwitchRoutingStaticRoutePathParams extends SpeakeasyBase {
    serial: string;
    staticRouteId: string;
}
export declare class GetDeviceSwitchRoutingStaticRouteRequest extends SpeakeasyBase {
    pathParams: GetDeviceSwitchRoutingStaticRoutePathParams;
}
export declare class GetDeviceSwitchRoutingStaticRouteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getDeviceSwitchRoutingStaticRoute200ApplicationJsonObject?: Map<string, any>;
}
