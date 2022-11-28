import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkTrafficPathParams extends SpeakeasyBase {
    networkId: string;
}
export declare enum GetNetworkTrafficDeviceTypeEnum {
    Combined = "combined",
    Wireless = "wireless",
    Switch = "switch",
    Appliance = "appliance"
}
export declare class GetNetworkTrafficQueryParams extends SpeakeasyBase {
    deviceType?: GetNetworkTrafficDeviceTypeEnum;
    t0?: string;
    timespan?: number;
}
export declare class GetNetworkTrafficRequest extends SpeakeasyBase {
    pathParams: GetNetworkTrafficPathParams;
    queryParams: GetNetworkTrafficQueryParams;
}
export declare class GetNetworkTrafficResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkTraffic200ApplicationJsonObject?: Map<string, any>;
}
