import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetManagedServicesSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetManagedServicesSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetManagedServicesSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetManagedServicesSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetManagedServicesSecurityOption2;
}


export class GetManagedServicesRequest extends SpeakeasyBase {
  @Metadata()
  security: GetManagedServicesSecurity;
}


export class GetManagedServices200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.ManagedService })
  data?: shared.ManagedService[];

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=pages" })
  pages?: number;

  @Metadata({ data: "json, name=results" })
  results?: number;
}


export class GetManagedServicesDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetManagedServicesResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getManagedServices200ApplicationJsonObject?: GetManagedServices200ApplicationJson;

  @Metadata()
  getManagedServicesDefaultApplicationJsonObject?: GetManagedServicesDefaultApplicationJson;
}
