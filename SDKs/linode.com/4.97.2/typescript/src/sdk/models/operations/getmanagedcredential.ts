import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class GetManagedCredentialPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=credentialId" })
  credentialId: number;
}


export class GetManagedCredentialSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class GetManagedCredentialSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class GetManagedCredentialSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: GetManagedCredentialSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: GetManagedCredentialSecurityOption2;
}


export class GetManagedCredentialRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: GetManagedCredentialPathParams;

  @Metadata()
  security: GetManagedCredentialSecurity;
}


export class GetManagedCredentialDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class GetManagedCredentialResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  managedCredential?: shared.ManagedCredential;

  @Metadata()
  statusCode: number;

  @Metadata()
  getManagedCredentialDefaultApplicationJsonObject?: GetManagedCredentialDefaultApplicationJson;
}
