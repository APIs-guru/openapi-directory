import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class UpdateNetworkWirelessSsidEapOverridePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=number" })
  number: string;
}


// UpdateNetworkWirelessSsidEapOverrideRequestBodyEapolKey
/** 
 * EAPOL Key settings.
**/
export class UpdateNetworkWirelessSsidEapOverrideRequestBodyEapolKey extends SpeakeasyBase {
  @Metadata({ data: "json, name=retries" })
  retries?: number;

  @Metadata({ data: "json, name=timeoutInMs" })
  timeoutInMs?: number;
}


// UpdateNetworkWirelessSsidEapOverrideRequestBodyIdentity
/** 
 * EAP settings for identity requests.
**/
export class UpdateNetworkWirelessSsidEapOverrideRequestBodyIdentity extends SpeakeasyBase {
  @Metadata({ data: "json, name=retries" })
  retries?: number;

  @Metadata({ data: "json, name=timeout" })
  timeout?: number;
}


export class UpdateNetworkWirelessSsidEapOverrideRequestBody extends SpeakeasyBase {
  @Metadata({ data: "json, name=eapolKey" })
  eapolKey?: UpdateNetworkWirelessSsidEapOverrideRequestBodyEapolKey;

  @Metadata({ data: "json, name=identity" })
  identity?: UpdateNetworkWirelessSsidEapOverrideRequestBodyIdentity;

  @Metadata({ data: "json, name=maxRetries" })
  maxRetries?: number;

  @Metadata({ data: "json, name=timeout" })
  timeout?: number;
}


export class UpdateNetworkWirelessSsidEapOverrideRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateNetworkWirelessSsidEapOverridePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkWirelessSsidEapOverrideRequestBody;
}


export class UpdateNetworkWirelessSsidEapOverrideResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateNetworkWirelessSsidEapOverride200ApplicationJsonObject?: Map<string, any>;
}
