import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateNetworkSettingsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


// UpdateNetworkSettingsRequestBodySecureConnect
/** 
 * A hash of SecureConnect options applied to the Network.
**/
export class UpdateNetworkSettingsRequestBodySecureConnect extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enabled" })
  enabled?: boolean;
}


export class UpdateNetworkSettingsRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=localStatusPageEnabled" })
  localStatusPageEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=remoteStatusPageEnabled" })
  remoteStatusPageEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=secureConnect" })
  secureConnect?: UpdateNetworkSettingsRequestBodySecureConnect;
}


export class UpdateNetworkSettingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNetworkSettingsPathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkSettingsRequestBody;
}


export class UpdateNetworkSettingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNetworkSettings200ApplicationJsonObject?: Map<string, any>;
}
