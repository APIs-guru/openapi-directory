import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkWirelessSsidIdentityPsksPathParams extends SpeakeasyBase {
    networkId: string;
    number: string;
}
export declare class GetNetworkWirelessSsidIdentityPsksRequest extends SpeakeasyBase {
    pathParams: GetNetworkWirelessSsidIdentityPsksPathParams;
}
export declare class GetNetworkWirelessSsidIdentityPsksResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkWirelessSsidIdentityPsks200ApplicationJsonObject?: Map<string, any>;
}
