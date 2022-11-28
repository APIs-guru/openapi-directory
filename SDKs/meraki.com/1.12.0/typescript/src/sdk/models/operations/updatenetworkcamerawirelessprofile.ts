import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateNetworkCameraWirelessProfilePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=wirelessProfileId" })
  wirelessProfileId: string;
}


// UpdateNetworkCameraWirelessProfileRequestBodyIdentity
/** 
 * The identity of the wireless profile. Required for creating wireless profiles in 8021x-radius auth mode.
**/
export class UpdateNetworkCameraWirelessProfileRequestBodyIdentity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}

export enum UpdateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnum {
    Psk = "psk",
    EightThousandAndTwentyOnexRadius = "8021x-radius"
}


// UpdateNetworkCameraWirelessProfileRequestBodySsid
/** 
 * The details of the SSID config.
**/
export class UpdateNetworkCameraWirelessProfileRequestBodySsid extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authMode" })
  authMode?: UpdateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnum;

  @SpeakeasyMetadata({ data: "json, name=encryptionMode" })
  encryptionMode?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=psk" })
  psk?: string;
}


export class UpdateNetworkCameraWirelessProfileRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=identity" })
  identity?: UpdateNetworkCameraWirelessProfileRequestBodyIdentity;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ssid" })
  ssid?: UpdateNetworkCameraWirelessProfileRequestBodySsid;
}


export class UpdateNetworkCameraWirelessProfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNetworkCameraWirelessProfilePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkCameraWirelessProfileRequestBody;
}


export class UpdateNetworkCameraWirelessProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNetworkCameraWirelessProfile200ApplicationJsonObject?: Map<string, any>;
}
