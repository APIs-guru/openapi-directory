import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class AddLinodeIpPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=linodeId" })
  linodeId: number;
}


export class AddLinodeIpSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class AddLinodeIpSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class AddLinodeIpSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: AddLinodeIpSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: AddLinodeIpSecurityOption2;
}


export class AddLinodeIpRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: AddLinodeIpPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: any;

  @Metadata()
  security: AddLinodeIpSecurity;
}


export class AddLinodeIpDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class AddLinodeIpResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  ipAddress?: shared.IpAddress;

  @Metadata()
  statusCode: number;

  @Metadata()
  addLinodeIpDefaultApplicationJsonObject?: AddLinodeIpDefaultApplicationJson;
}
