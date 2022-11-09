import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetIpPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=address" })
  address: string;
}


export class GetIpSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetIpSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetIpSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetIpSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetIpSecurityOption2;
}


export class GetIpRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetIpPathParams;

  @Metadata()
  security: GetIpSecurity;
}


export class GetIpDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetIpResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  ipAddress?: shared.IpAddress;

  @Metadata()
  statusCode: number;

  @Metadata()
  getIpDefaultApplicationJsonObject?: GetIpDefaultApplicationJson;
}
