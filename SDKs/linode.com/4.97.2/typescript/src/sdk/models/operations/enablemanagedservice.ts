import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class EnableManagedServicePathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=serviceId" })
  serviceId: number;
}


export class EnableManagedServiceSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class EnableManagedServiceSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class EnableManagedServiceSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: EnableManagedServiceSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: EnableManagedServiceSecurityOption2;
}


export class EnableManagedServiceRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: EnableManagedServicePathParams;

  @Metadata()
  security: EnableManagedServiceSecurity;
}


export class EnableManagedServiceDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class EnableManagedServiceResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  managedService?: shared.ManagedService;

  @Metadata()
  statusCode: number;

  @Metadata()
  enableManagedServiceDefaultApplicationJsonObject?: EnableManagedServiceDefaultApplicationJson;
}
