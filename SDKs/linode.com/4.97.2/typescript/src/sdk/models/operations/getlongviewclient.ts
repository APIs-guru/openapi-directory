import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetLongviewClientPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=clientId" })
  clientId: number;
}


export class GetLongviewClientSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetLongviewClientSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetLongviewClientSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetLongviewClientSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetLongviewClientSecurityOption2;
}


export class GetLongviewClientRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetLongviewClientPathParams;

  @Metadata()
  security: GetLongviewClientSecurity;
}


export class GetLongviewClientDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetLongviewClientResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  longviewClient?: shared.LongviewClient;

  @Metadata()
  statusCode: number;

  @Metadata()
  getLongviewClientDefaultApplicationJsonObject?: GetLongviewClientDefaultApplicationJson;
}
