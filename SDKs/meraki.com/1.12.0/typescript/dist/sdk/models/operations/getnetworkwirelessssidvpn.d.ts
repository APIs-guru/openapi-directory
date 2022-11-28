import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkWirelessSsidVpnPathParams extends SpeakeasyBase {
    networkId: string;
    number: string;
}
export declare class GetNetworkWirelessSsidVpnRequest extends SpeakeasyBase {
    pathParams: GetNetworkWirelessSsidVpnPathParams;
}
export declare class GetNetworkWirelessSsidVpnResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkWirelessSsidVpn200ApplicationJsonObject?: Map<string, any>;
}
