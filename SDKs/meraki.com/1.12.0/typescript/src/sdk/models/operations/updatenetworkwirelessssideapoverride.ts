import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateNetworkWirelessSsidEapOverridePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=networkId" })
  networkId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=number" })
  number: string;
}


// UpdateNetworkWirelessSsidEapOverrideRequestBodyEapolKey
/** 
 * EAPOL Key settings.
**/
export class UpdateNetworkWirelessSsidEapOverrideRequestBodyEapolKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=retries" })
  retries?: number;

  @SpeakeasyMetadata({ data: "json, name=timeoutInMs" })
  timeoutInMs?: number;
}


// UpdateNetworkWirelessSsidEapOverrideRequestBodyIdentity
/** 
 * EAP settings for identity requests.
**/
export class UpdateNetworkWirelessSsidEapOverrideRequestBodyIdentity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=retries" })
  retries?: number;

  @SpeakeasyMetadata({ data: "json, name=timeout" })
  timeout?: number;
}


export class UpdateNetworkWirelessSsidEapOverrideRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=eapolKey" })
  eapolKey?: UpdateNetworkWirelessSsidEapOverrideRequestBodyEapolKey;

  @SpeakeasyMetadata({ data: "json, name=identity" })
  identity?: UpdateNetworkWirelessSsidEapOverrideRequestBodyIdentity;

  @SpeakeasyMetadata({ data: "json, name=maxRetries" })
  maxRetries?: number;

  @SpeakeasyMetadata({ data: "json, name=timeout" })
  timeout?: number;
}


export class UpdateNetworkWirelessSsidEapOverrideRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: UpdateNetworkWirelessSsidEapOverridePathParams;

  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  request?: UpdateNetworkWirelessSsidEapOverrideRequestBody;
}


export class UpdateNetworkWirelessSsidEapOverrideResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  updateNetworkWirelessSsidEapOverride200ApplicationJsonObject?: Map<string, any>;
}
