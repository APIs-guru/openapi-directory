import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class CreateLongviewClientSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class CreateLongviewClientSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class CreateLongviewClientSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: CreateLongviewClientSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: CreateLongviewClientSecurityOption2;
}


export class CreateLongviewClientRequest extends SpeakeasyBase {
  @Metadata({ data: "request, media_type=application/json" })
  request: shared.LongviewClient;

  @Metadata()
  security: CreateLongviewClientSecurity;
}


export class CreateLongviewClientDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class CreateLongviewClientResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  longviewClient?: shared.LongviewClient;

  @Metadata()
  statusCode: number;

  @Metadata()
  createLongviewClientDefaultApplicationJsonObject?: CreateLongviewClientDefaultApplicationJson;
}
