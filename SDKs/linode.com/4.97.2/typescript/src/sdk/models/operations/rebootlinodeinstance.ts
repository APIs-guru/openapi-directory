import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class RebootLinodeInstancePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=linodeId" })
  linodeId: number;
}


export class RebootLinodeInstanceSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class RebootLinodeInstanceSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class RebootLinodeInstanceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: RebootLinodeInstanceSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: RebootLinodeInstanceSecurityOption2;
}


export class RebootLinodeInstanceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: RebootLinodeInstancePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request?: any;

  @Metadata()
  security: RebootLinodeInstanceSecurity;
}


export class RebootLinodeInstanceDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class RebootLinodeInstanceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  rebootLinodeInstance200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  rebootLinodeInstanceDefaultApplicationJsonObject?: RebootLinodeInstanceDefaultApplicationJson;
}
