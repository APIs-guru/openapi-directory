import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RevokeTrustedDevicePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=deviceId" })
  deviceId: number;
}


export class RevokeTrustedDeviceSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class RevokeTrustedDeviceSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class RevokeTrustedDeviceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: RevokeTrustedDeviceSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: RevokeTrustedDeviceSecurityOption2;
}


export class RevokeTrustedDeviceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RevokeTrustedDevicePathParams;

  @Metadata()
  security: RevokeTrustedDeviceSecurity;
}


export class RevokeTrustedDeviceDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class RevokeTrustedDeviceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  revokeTrustedDevice200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  revokeTrustedDeviceDefaultApplicationJsonObject?: RevokeTrustedDeviceDefaultApplicationJson;
}
