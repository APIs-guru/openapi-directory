import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkSettingsPathParams extends SpeakeasyBase {
    networkId: string;
}
/**
 * A hash of SecureConnect options applied to the Network.
**/
export declare class UpdateNetworkSettingsRequestBodySecureConnect extends SpeakeasyBase {
    enabled?: boolean;
}
export declare class UpdateNetworkSettingsRequestBody extends SpeakeasyBase {
    localStatusPageEnabled?: boolean;
    remoteStatusPageEnabled?: boolean;
    secureConnect?: UpdateNetworkSettingsRequestBodySecureConnect;
}
export declare class UpdateNetworkSettingsRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkSettingsPathParams;
    request?: UpdateNetworkSettingsRequestBody;
}
export declare class UpdateNetworkSettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkSettings200ApplicationJsonObject?: Map<string, any>;
}
