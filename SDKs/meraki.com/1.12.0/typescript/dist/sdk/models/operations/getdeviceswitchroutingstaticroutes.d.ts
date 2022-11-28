import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetDeviceSwitchRoutingStaticRoutesPathParams extends SpeakeasyBase {
    serial: string;
}
export declare class GetDeviceSwitchRoutingStaticRoutesRequest extends SpeakeasyBase {
    pathParams: GetDeviceSwitchRoutingStaticRoutesPathParams;
}
export declare class GetDeviceSwitchRoutingStaticRoutesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getDeviceSwitchRoutingStaticRoutes200ApplicationJsonObject?: Map<string, any>;
}
