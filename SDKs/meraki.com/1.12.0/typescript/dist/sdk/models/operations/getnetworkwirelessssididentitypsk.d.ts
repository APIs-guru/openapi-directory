import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetNetworkWirelessSsidIdentityPskPathParams extends SpeakeasyBase {
    identityPskId: string;
    networkId: string;
    number: string;
}
export declare class GetNetworkWirelessSsidIdentityPskRequest extends SpeakeasyBase {
    pathParams: GetNetworkWirelessSsidIdentityPskPathParams;
}
export declare class GetNetworkWirelessSsidIdentityPskResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getNetworkWirelessSsidIdentityPsk200ApplicationJsonObject?: Map<string, any>;
}
