import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetTrustedDevicePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=deviceId" })
  deviceId: number;
}


export class GetTrustedDeviceSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetTrustedDeviceSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetTrustedDeviceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetTrustedDeviceSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetTrustedDeviceSecurityOption2;
}


export class GetTrustedDeviceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetTrustedDevicePathParams;

  @Metadata()
  security: GetTrustedDeviceSecurity;
}


export class GetTrustedDeviceDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetTrustedDeviceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  trustedDevice?: shared.TrustedDevice;

  @Metadata()
  getTrustedDeviceDefaultApplicationJsonObject?: GetTrustedDeviceDefaultApplicationJson;
}
