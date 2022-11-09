import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateManagedServicePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serviceId" })
  serviceId: number;
}


export class UpdateManagedServiceSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class UpdateManagedServiceSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class UpdateManagedServiceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: UpdateManagedServiceSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: UpdateManagedServiceSecurityOption2;
}


export class UpdateManagedServiceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateManagedServicePathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ManagedService;

  @Metadata()
  security: UpdateManagedServiceSecurity;
}


export class UpdateManagedServiceDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class UpdateManagedServiceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  managedService?: shared.ManagedService;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateManagedServiceDefaultApplicationJsonObject?: UpdateManagedServiceDefaultApplicationJson;
}
