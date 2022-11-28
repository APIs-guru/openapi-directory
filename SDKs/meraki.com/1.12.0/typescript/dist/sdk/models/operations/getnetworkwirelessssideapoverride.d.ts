import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkWirelessSsidEapOverridePathParams extends SpeakeasyBase {
    networkId: string;
    number: string;
}
export declare class GetNetworkWirelessSsidEapOverrideRequest extends SpeakeasyBase {
    pathParams: GetNetworkWirelessSsidEapOverridePathParams;
}
export declare class GetNetworkWirelessSsidEapOverrideResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkWirelessSsidEapOverride200ApplicationJsonObject?: Map<string, any>;
}
