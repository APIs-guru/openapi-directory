import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteClientPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=clientId" })
  clientId: string;
}


export class DeleteClientSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class DeleteClientSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class DeleteClientSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DeleteClientSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DeleteClientSecurityOption2;
}


export class DeleteClientRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteClientPathParams;

  @Metadata()
  security: DeleteClientSecurity;
}


export class DeleteClientDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class DeleteClientResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  deleteClient200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  deleteClientDefaultApplicationJsonObject?: DeleteClientDefaultApplicationJson;
}
