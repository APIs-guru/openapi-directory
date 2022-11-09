import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateIpPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=address" })
  address: string;
}


export class UpdateIpSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class UpdateIpSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class UpdateIpSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: UpdateIpSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: UpdateIpSecurityOption2;
}


export class UpdateIpRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateIpPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.IpAddress;

  @Metadata()
  security: UpdateIpSecurity;
}


export class UpdateIpDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class UpdateIpResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  ipAddress?: shared.IpAddress;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateIpDefaultApplicationJsonObject?: UpdateIpDefaultApplicationJson;
}
