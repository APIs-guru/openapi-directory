import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DeleteManagedServicePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serviceId" })
  serviceId: number;
}


export class DeleteManagedServiceSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class DeleteManagedServiceSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class DeleteManagedServiceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DeleteManagedServiceSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DeleteManagedServiceSecurityOption2;
}


export class DeleteManagedServiceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DeleteManagedServicePathParams;

  @Metadata()
  security: DeleteManagedServiceSecurity;
}


export class DeleteManagedServiceDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class DeleteManagedServiceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  deleteManagedService200ApplicationJsonObject?: Map<string, any>;

  @Metadata()
  deleteManagedServiceDefaultApplicationJsonObject?: DeleteManagedServiceDefaultApplicationJson;
}
