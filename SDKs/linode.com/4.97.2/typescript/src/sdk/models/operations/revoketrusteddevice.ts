import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RevokeTrustedDevicePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=deviceId" })
  deviceId: number;
}


export class RevokeTrustedDeviceSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class RevokeTrustedDeviceDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class RevokeTrustedDeviceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RevokeTrustedDevicePathParams;

  @SpeakeasyMetadata()
  security: RevokeTrustedDeviceSecurity;
}


export class RevokeTrustedDeviceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  revokeTrustedDevice200ApplicationJsonObject?: Map<string, any>;

  @SpeakeasyMetadata()
  revokeTrustedDeviceDefaultApplicationJsonObject?: RevokeTrustedDeviceDefaultApplicationJson;
}
