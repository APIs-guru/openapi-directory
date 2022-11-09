import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetManagedCredentialsQueryParams extends SpeakeasyBase {
  @Metadata({ data: "queryParam, style=form;explode=true;name=page" })
  page?: number;

  @Metadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;
}


export class GetManagedCredentialsSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetManagedCredentialsSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetManagedCredentialsSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetManagedCredentialsSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetManagedCredentialsSecurityOption2;
}


export class GetManagedCredentialsRequest extends SpeakeasyBase {
  @Metadata()
  queryParams: GetManagedCredentialsQueryParams;

  @Metadata()
  security: GetManagedCredentialsSecurity;
}


export class GetManagedCredentials200ApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=data", elemType: shared.ManagedCredential })
  data?: shared.ManagedCredential[];

  @Metadata({ data: "json, name=page" })
  page?: number;

  @Metadata({ data: "json, name=pages" })
  pages?: number;

  @Metadata({ data: "json, name=results" })
  results?: number;
}


export class GetManagedCredentialsDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetManagedCredentialsResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  statusCode: number;

  @Metadata()
  getManagedCredentials200ApplicationJsonObject?: GetManagedCredentials200ApplicationJson;

  @Metadata()
  getManagedCredentialsDefaultApplicationJsonObject?: GetManagedCredentialsDefaultApplicationJson;
}
