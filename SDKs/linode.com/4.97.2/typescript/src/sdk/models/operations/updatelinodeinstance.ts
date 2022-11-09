import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateLinodeInstancePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=linodeId" })
  linodeId: number;
}


export class UpdateLinodeInstanceSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class UpdateLinodeInstanceSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class UpdateLinodeInstanceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: UpdateLinodeInstanceSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: UpdateLinodeInstanceSecurityOption2;
}


export class UpdateLinodeInstanceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateLinodeInstancePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.Linode;

  @Metadata()
  security: UpdateLinodeInstanceSecurity;
}


export class UpdateLinodeInstanceDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class UpdateLinodeInstanceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  linode?: shared.Linode;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateLinodeInstanceDefaultApplicationJsonObject?: UpdateLinodeInstanceDefaultApplicationJson;
}
