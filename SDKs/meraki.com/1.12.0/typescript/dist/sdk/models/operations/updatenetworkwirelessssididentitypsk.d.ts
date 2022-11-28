import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkWirelessSsidIdentityPskPathParams extends SpeakeasyBase {
    identityPskId: string;
    networkId: string;
    number: string;
}
export declare class UpdateNetworkWirelessSsidIdentityPskRequestBody extends SpeakeasyBase {
    groupPolicyId?: string;
    name?: string;
    passphrase?: string;
}
export declare class UpdateNetworkWirelessSsidIdentityPskRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkWirelessSsidIdentityPskPathParams;
    request?: UpdateNetworkWirelessSsidIdentityPskRequestBody;
}
export declare class UpdateNetworkWirelessSsidIdentityPskResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkWirelessSsidIdentityPsk200ApplicationJsonObject?: Map<string, any>;
}
