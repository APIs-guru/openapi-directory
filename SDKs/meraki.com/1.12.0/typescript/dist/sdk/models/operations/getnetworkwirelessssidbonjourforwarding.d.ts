import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkWirelessSsidBonjourForwardingPathParams extends SpeakeasyBase {
    networkId: string;
    number: string;
}
export declare class GetNetworkWirelessSsidBonjourForwardingRequest extends SpeakeasyBase {
    pathParams: GetNetworkWirelessSsidBonjourForwardingPathParams;
}
export declare class GetNetworkWirelessSsidBonjourForwardingResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkWirelessSsidBonjourForwarding200ApplicationJsonObject?: Map<string, any>;
}
