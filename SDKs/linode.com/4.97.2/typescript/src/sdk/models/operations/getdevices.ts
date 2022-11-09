import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetDevicesSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetDevicesSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetDevicesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetDevicesSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetDevicesSecurityOption2;
}


export class GetDevicesRequest extends SpeakeasyBase {
  @Metadata()
  security: GetDevicesSecurity;
}


export class GetDevices200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.TrustedDevice })
  data?: shared.TrustedDevice[];

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=pages" })
  pages?: number;

  @Metadata({ data: "json, name=results" })
  results?: number;
}


export class GetDevicesDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetDevicesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getDevices200ApplicationJsonObject?: GetDevices200ApplicationJson;

  @Metadata()
  getDevicesDefaultApplicationJsonObject?: GetDevicesDefaultApplicationJson;
}
