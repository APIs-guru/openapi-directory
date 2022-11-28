import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetDeviceSwitchRoutingInterfacesPathParams extends SpeakeasyBase {
    serial: string;
}
export declare class GetDeviceSwitchRoutingInterfacesRequest extends SpeakeasyBase {
    pathParams: GetDeviceSwitchRoutingInterfacesPathParams;
}
export declare class GetDeviceSwitchRoutingInterfacesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getDeviceSwitchRoutingInterfaces200ApplicationJsonObject?: Map<string, any>;
}
