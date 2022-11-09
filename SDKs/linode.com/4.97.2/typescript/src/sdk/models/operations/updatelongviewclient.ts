import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateLongviewClientPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=clientId" })
  clientId: number;
}


export class UpdateLongviewClientSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class UpdateLongviewClientSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class UpdateLongviewClientSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: UpdateLongviewClientSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: UpdateLongviewClientSecurityOption2;
}


export class UpdateLongviewClientRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateLongviewClientPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.LongviewClient;

  @Metadata()
  security: UpdateLongviewClientSecurity;
}


export class UpdateLongviewClientDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class UpdateLongviewClientResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  longviewClient?: shared.LongviewClient;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateLongviewClientDefaultApplicationJsonObject?: UpdateLongviewClientDefaultApplicationJson;
}
