import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateNetworkCameraWirelessProfilePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


// CreateNetworkCameraWirelessProfileRequestBodyIdentity
/** 
 * The identity of the wireless profile. Required for creating wireless profiles in 8021x-radius auth mode.
**/
export class CreateNetworkCameraWirelessProfileRequestBodyIdentity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=username" })
  username?: string;
}

export enum CreateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnum {
    Psk = "psk",
    EightThousandAndTwentyOnexRadius = "8021x-radius"
}


// CreateNetworkCameraWirelessProfileRequestBodySsid
/** 
 * The details of the SSID config.
**/
export class CreateNetworkCameraWirelessProfileRequestBodySsid extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=authMode" })
  authMode?: CreateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnum;

  @SpeakeasyMetadata({ data: "json, name=encryptionMode" })
  encryptionMode?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=psk" })
  psk?: string;
}


export class CreateNetworkCameraWirelessProfileRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=identity" })
  identity?: CreateNetworkCameraWirelessProfileRequestBodyIdentity;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=ssid" })
  ssid: CreateNetworkCameraWirelessProfileRequestBodySsid;
}


export class CreateNetworkCameraWirelessProfileRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: CreateNetworkCameraWirelessProfilePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request: CreateNetworkCameraWirelessProfileRequestBody;
}


export class CreateNetworkCameraWirelessProfileResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  createNetworkCameraWirelessProfile200ApplicationJsonObject?: Map<string, any>;
}
