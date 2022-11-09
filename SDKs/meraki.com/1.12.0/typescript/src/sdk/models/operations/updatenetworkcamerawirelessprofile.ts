import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkCameraWirelessProfilePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=wirelessProfileId" })
  wirelessProfileId: string;
}


// UpdateNetworkCameraWirelessProfileRequestBodyIdentity
/** 
 * The identity of the wireless profile. Required for creating wireless profiles in 8021x-radius auth mode.
**/
export class UpdateNetworkCameraWirelessProfileRequestBodyIdentity extends SpeakeasyBase {
  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=username" })
  username?: string;
}

export enum UpdateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnum {
    Psk = "psk"
,    EightThousandAndTwentyOnexRadius = "8021x-radius"
}


// UpdateNetworkCameraWirelessProfileRequestBodySsid
/** 
 * The details of the SSID config.
**/
export class UpdateNetworkCameraWirelessProfileRequestBodySsid extends SpeakeasyBase {
  @Metadata({ data: "json, name=authMode" })
  authMode?: UpdateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnum;

  @Metadata({ data: "json, name=encryptionMode" })
  encryptionMode?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=psk" })
  psk?: string;
}


export class UpdateNetworkCameraWirelessProfileRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=identity" })
  identity?: UpdateNetworkCameraWirelessProfileRequestBodyIdentity;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=ssid" })
  ssid?: UpdateNetworkCameraWirelessProfileRequestBodySsid;
}


export class UpdateNetworkCameraWirelessProfileRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkCameraWirelessProfilePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkCameraWirelessProfileRequestBody;
}


export class UpdateNetworkCameraWirelessProfileResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkCameraWirelessProfile200ApplicationJsonObject?: Map<string, any>;
}
