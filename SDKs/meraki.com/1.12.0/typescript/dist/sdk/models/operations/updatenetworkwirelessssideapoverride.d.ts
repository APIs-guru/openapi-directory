import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkWirelessSsidEapOverridePathParams extends SpeakeasyBase {
    networkId: string;
    number: string;
}
/**
 * EAPOL Key settings.
**/
export declare class UpdateNetworkWirelessSsidEapOverrideRequestBodyEapolKey extends SpeakeasyBase {
    retries?: number;
    timeoutInMs?: number;
}
/**
 * EAP settings for identity requests.
**/
export declare class UpdateNetworkWirelessSsidEapOverrideRequestBodyIdentity extends SpeakeasyBase {
    retries?: number;
    timeout?: number;
}
export declare class UpdateNetworkWirelessSsidEapOverrideRequestBody extends SpeakeasyBase {
    eapolKey?: UpdateNetworkWirelessSsidEapOverrideRequestBodyEapolKey;
    identity?: UpdateNetworkWirelessSsidEapOverrideRequestBodyIdentity;
    maxRetries?: number;
    timeout?: number;
}
export declare class UpdateNetworkWirelessSsidEapOverrideRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkWirelessSsidEapOverridePathParams;
    request?: UpdateNetworkWirelessSsidEapOverrideRequestBody;
}
export declare class UpdateNetworkWirelessSsidEapOverrideResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkWirelessSsidEapOverride200ApplicationJsonObject?: Map<string, any>;
}
