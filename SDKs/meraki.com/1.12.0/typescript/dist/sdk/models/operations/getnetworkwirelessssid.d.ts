import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkWirelessSsidPathParams extends SpeakeasyBase {
    networkId: string;
    number: string;
}
export declare class GetNetworkWirelessSsidRequest extends SpeakeasyBase {
    pathParams: GetNetworkWirelessSsidPathParams;
}
export declare class GetNetworkWirelessSsidResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkWirelessSsid200ApplicationJsonObject?: Map<string, any>;
}
