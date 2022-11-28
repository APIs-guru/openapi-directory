import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetTrustedDevicePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=deviceId" })
  deviceId: number;
}


export class GetTrustedDeviceSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken?: shared.SchemePersonalAccessToken;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oauth?: shared.SchemeOauth;
}


export class GetTrustedDeviceDefaultApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetTrustedDeviceRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetTrustedDevicePathParams;

  @SpeakeasyMetadata()
  security: GetTrustedDeviceSecurity;
}


export class GetTrustedDeviceResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  trustedDevice?: shared.TrustedDevice;

  @SpeakeasyMetadata()
  getTrustedDeviceDefaultApplicationJsonObject?: GetTrustedDeviceDefaultApplicationJson;
}
