import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateNetworkCameraWirelessProfilePathParams extends SpeakeasyBase {
    networkId: string;
}
/**
 * The identity of the wireless profile. Required for creating wireless profiles in 8021x-radius auth mode.
**/
export declare class CreateNetworkCameraWirelessProfileRequestBodyIdentity extends SpeakeasyBase {
    password?: string;
    username?: string;
}
export declare enum CreateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnum {
    Psk = "psk",
    EightThousandAndTwentyOnexRadius = "8021x-radius"
}
/**
 * The details of the SSID config.
**/
export declare class CreateNetworkCameraWirelessProfileRequestBodySsid extends SpeakeasyBase {
    authMode?: CreateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnum;
    encryptionMode?: string;
    name?: string;
    psk?: string;
}
export declare class CreateNetworkCameraWirelessProfileRequestBody extends SpeakeasyBase {
    identity?: CreateNetworkCameraWirelessProfileRequestBodyIdentity;
    name: string;
    ssid: CreateNetworkCameraWirelessProfileRequestBodySsid;
}
export declare class CreateNetworkCameraWirelessProfileRequest extends SpeakeasyBase {
    pathParams: CreateNetworkCameraWirelessProfilePathParams;
    request: CreateNetworkCameraWirelessProfileRequestBody;
}
export declare class CreateNetworkCameraWirelessProfileResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createNetworkCameraWirelessProfile200ApplicationJsonObject?: Map<string, any>;
}
