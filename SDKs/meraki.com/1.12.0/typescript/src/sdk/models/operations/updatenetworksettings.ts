import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkSettingsPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;
}


// UpdateNetworkSettingsRequestBodySecureConnect
/** 
 * A hash of SecureConnect options applied to the Network.
**/
export class UpdateNetworkSettingsRequestBodySecureConnect extends SpeakeasyBase {
  @Metadata({ data: "json, name=enabled" })
  enabled?: boolean;
}


export class UpdateNetworkSettingsRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=localStatusPageEnabled" })
  localStatusPageEnabled?: boolean;

  @Metadata({ data: "json, name=remoteStatusPageEnabled" })
  remoteStatusPageEnabled?: boolean;

  @Metadata({ data: "json, name=secureConnect" })
  secureConnect?: UpdateNetworkSettingsRequestBodySecureConnect;
}


export class UpdateNetworkSettingsRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkSettingsPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkSettingsRequestBody;
}


export class UpdateNetworkSettingsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkSettings200ApplicationJsonObject?: Map<string, any>;
}
