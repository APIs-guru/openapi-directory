import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetLinodeInstancePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=linodeId" })
  linodeId: number;
}


export class GetLinodeInstanceSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetLinodeInstanceSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetLinodeInstanceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetLinodeInstanceSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetLinodeInstanceSecurityOption2;
}


export class GetLinodeInstanceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetLinodeInstancePathParams;

  @Metadata()
  security: GetLinodeInstanceSecurity;
}


export class GetLinodeInstanceDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetLinodeInstanceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  linode?: shared.Linode;

  @Metadata()
  statusCode: number;

  @Metadata()
  getLinodeInstanceDefaultApplicationJsonObject?: GetLinodeInstanceDefaultApplicationJson;
}
