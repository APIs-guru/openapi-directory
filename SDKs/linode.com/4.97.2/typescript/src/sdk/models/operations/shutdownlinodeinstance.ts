import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class ShutdownLinodeInstancePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=linodeId" })
  linodeId: number;
}


export class ShutdownLinodeInstanceSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class ShutdownLinodeInstanceSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class ShutdownLinodeInstanceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: ShutdownLinodeInstanceSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: ShutdownLinodeInstanceSecurityOption2;
}


export class ShutdownLinodeInstanceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: ShutdownLinodeInstancePathParams;

  @Metadata()
  security: ShutdownLinodeInstanceSecurity;
}


export class ShutdownLinodeInstanceDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class ShutdownLinodeInstanceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  shutdownLinodeInstance200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  shutdownLinodeInstanceDefaultApplicationJsonObject?: ShutdownLinodeInstanceDefaultApplicationJson;
}
