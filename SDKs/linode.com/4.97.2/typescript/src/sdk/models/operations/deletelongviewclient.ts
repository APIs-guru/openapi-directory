import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteLongviewClientPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=clientId" })
  clientId: number;
}


export class DeleteLongviewClientSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class DeleteLongviewClientSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class DeleteLongviewClientSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DeleteLongviewClientSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DeleteLongviewClientSecurityOption2;
}


export class DeleteLongviewClientRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteLongviewClientPathParams;

  @Metadata()
  security: DeleteLongviewClientSecurity;
}


export class DeleteLongviewClientDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class DeleteLongviewClientResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  deleteLongviewClient200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  deleteLongviewClientDefaultApplicationJsonObject?: DeleteLongviewClientDefaultApplicationJson;
}
