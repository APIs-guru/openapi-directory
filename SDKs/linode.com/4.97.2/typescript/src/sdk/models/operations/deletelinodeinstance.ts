import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteLinodeInstancePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=linodeId" })
  linodeId: number;
}


export class DeleteLinodeInstanceSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class DeleteLinodeInstanceSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class DeleteLinodeInstanceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DeleteLinodeInstanceSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DeleteLinodeInstanceSecurityOption2;
}


export class DeleteLinodeInstanceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteLinodeInstancePathParams;

  @Metadata()
  security: DeleteLinodeInstanceSecurity;
}


export class DeleteLinodeInstanceDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class DeleteLinodeInstanceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  deleteLinodeInstance200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  deleteLinodeInstanceDefaultApplicationJsonObject?: DeleteLinodeInstanceDefaultApplicationJson;
}
