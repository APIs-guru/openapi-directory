import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CreateNetworkCameraWirelessProfilePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


// CreateNetworkCameraWirelessProfileRequestBodyIdentity
/** 
 * The identity of the wireless profile. Required for creating wireless profiles in 8021x-radius auth mode.
**/
export class CreateNetworkCameraWirelessProfileRequestBodyIdentity extends SpeakeasyBase {
  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=username" })
  username?: string;
}

export enum CreateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnum {
    Psk = "psk"
,    EightThousandAndTwentyOnexRadius = "8021x-radius"
}


// CreateNetworkCameraWirelessProfileRequestBodySsid
/** 
 * The details of the SSID config.
**/
export class CreateNetworkCameraWirelessProfileRequestBodySsid extends SpeakeasyBase {
  @Metadata({ data: "json, name=authMode" })
  authMode?: CreateNetworkCameraWirelessProfileRequestBodySsidAuthModeEnum;

  @Metadata({ data: "json, name=encryptionMode" })
  encryptionMode?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=psk" })
  psk?: string;
}


export class CreateNetworkCameraWirelessProfileRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=identity" })
  identity?: CreateNetworkCameraWirelessProfileRequestBodyIdentity;

  @Metadata({ data: "json, name=name" })
  name: string;

  @Metadata({ data: "json, name=ssid" })
  ssid: CreateNetworkCameraWirelessProfileRequestBodySsid;
}


export class CreateNetworkCameraWirelessProfileRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: CreateNetworkCameraWirelessProfilePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: CreateNetworkCameraWirelessProfileRequestBody;
}


export class CreateNetworkCameraWirelessProfileResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  createNetworkCameraWirelessProfile200ApplicationJsonObject?: Map<string, any>;
}
