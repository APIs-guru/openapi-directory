import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetLinodeIpPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=address" })
  address: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=linodeId" })
  linodeId: number;
}


export class GetLinodeIpSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetLinodeIpSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetLinodeIpSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetLinodeIpSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetLinodeIpSecurityOption2;
}


export class GetLinodeIpRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetLinodeIpPathParams;

  @Metadata()
  security: GetLinodeIpSecurity;
}


export class GetLinodeIpDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetLinodeIpResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  ipAddress?: shared.IpAddress;

  @Metadata()
  statusCode: number;

  @Metadata()
  getLinodeIpDefaultApplicationJsonObject?: GetLinodeIpDefaultApplicationJson;
}
