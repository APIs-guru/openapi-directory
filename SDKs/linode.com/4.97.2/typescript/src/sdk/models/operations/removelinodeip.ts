import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RemoveLinodeIpPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=address" })
  address: string;

  @Metadata({ data: "pathParam, style=simple;explode=false;name=linodeId" })
  linodeId: number;
}


export class RemoveLinodeIpSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class RemoveLinodeIpSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class RemoveLinodeIpSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: RemoveLinodeIpSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: RemoveLinodeIpSecurityOption2;
}


export class RemoveLinodeIpRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RemoveLinodeIpPathParams;

  @Metadata()
  security: RemoveLinodeIpSecurity;
}


export class RemoveLinodeIpDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class RemoveLinodeIpResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  removeLinodeIp200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  removeLinodeIpDefaultApplicationJsonObject?: RemoveLinodeIpDefaultApplicationJson;
}
