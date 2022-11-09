import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class DisableManagedServicePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serviceId" })
  serviceId: number;
}


export class DisableManagedServiceSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class DisableManagedServiceSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class DisableManagedServiceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: DisableManagedServiceSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: DisableManagedServiceSecurityOption2;
}


export class DisableManagedServiceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: DisableManagedServicePathParams;

  @Metadata()
  security: DisableManagedServiceSecurity;
}


export class DisableManagedServiceDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class DisableManagedServiceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  managedService?: shared.ManagedService;

  @Metadata()
  statusCode: number;

  @Metadata()
  disableManagedServiceDefaultApplicationJsonObject?: DisableManagedServiceDefaultApplicationJson;
}
