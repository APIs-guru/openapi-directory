import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateNetworkWirelessSsidIdentityPskPathParams extends SpeakeasyBase {
    networkId: string;
    number: string;
}
export declare class CreateNetworkWirelessSsidIdentityPskRequestBody extends SpeakeasyBase {
    groupPolicyId: string;
    name: string;
    passphrase?: string;
}
export declare class CreateNetworkWirelessSsidIdentityPskRequest extends SpeakeasyBase {
    pathParams: CreateNetworkWirelessSsidIdentityPskPathParams;
    request: CreateNetworkWirelessSsidIdentityPskRequestBody;
}
export declare class CreateNetworkWirelessSsidIdentityPskResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createNetworkWirelessSsidIdentityPsk201ApplicationJsonObject?: Map<string, any>;
}
