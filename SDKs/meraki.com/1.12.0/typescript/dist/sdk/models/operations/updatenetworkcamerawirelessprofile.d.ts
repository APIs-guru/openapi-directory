import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateNetworkCameraWirelessProfilePathParams extends SpeakeasyBase {
    networkId: string;
    wirelessProfileId: string;
}
/**
 * The identity of the wireless profile. Required for creating wireless profiles in 8021x-radius auth mode.
**/
export declare class UpdateNetworkCameraWirelessProfileRequestBodyIdentity extends SpeakeasyBase {
    password?: string;
    username?: string;
}
export declare enum UpdateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnum {
    Psk = "psk",
    EightThousandAndTwentyOnexRadius = "8021x-radius"
}
/**
 * The details of the SSID config.
**/
export declare class UpdateNetworkCameraWirelessProfileRequestBodySsid extends SpeakeasyBase {
    authMode?: UpdateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnum;
    encryptionMode?: string;
    name?: string;
    psk?: string;
}
export declare class UpdateNetworkCameraWirelessProfileRequestBody extends SpeakeasyBase {
    identity?: UpdateNetworkCameraWirelessProfileRequestBodyIdentity;
    name?: string;
    ssid?: UpdateNetworkCameraWirelessProfileRequestBodySsid;
}
export declare class UpdateNetworkCameraWirelessProfileRequest extends SpeakeasyBase {
    pathParams: UpdateNetworkCameraWirelessProfilePathParams;
    request?: UpdateNetworkCameraWirelessProfileRequestBody;
}
export declare class UpdateNetworkCameraWirelessProfileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateNetworkCameraWirelessProfile200ApplicationJsonObject?: Map<string, any>;
}
