import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";


export class UpdateManagedCredentialPathParams extends SpeakeasyBase {
  @Metadata({ data: "pathParam, style=simple;explode=false;name=credentialId" })
  credentialId: number;
}


export class UpdateManagedCredentialSecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  personalAccessToken: shared.SchemePersonalAccessToken;
}


export class UpdateManagedCredentialSecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=oauth2" })
  oauth: shared.SchemeOauth;
}


export class UpdateManagedCredentialSecurity extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: UpdateManagedCredentialSecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: UpdateManagedCredentialSecurityOption2;
}


export class UpdateManagedCredentialRequest extends SpeakeasyBase {
  @Metadata()
  pathParams: UpdateManagedCredentialPathParams;

  @Metadata({ data: "request, media_type=application/json" })
  request: shared.ManagedCredential;

  @Metadata()
  security: UpdateManagedCredentialSecurity;
}


export class UpdateManagedCredentialDefaultApplicationJson extends SpeakeasyBase {
  @Metadata({ data: "json, name=errors", elemType: shared.ErrorObject })
  errors?: shared.ErrorObject[];
}


export class UpdateManagedCredentialResponse extends SpeakeasyBase {
  @Metadata()
  contentType: string;

  @Metadata()
  managedCredential?: shared.ManagedCredential;

  @Metadata()
  statusCode: number;

  @Metadata()
  updateManagedCredentialDefaultApplicationJsonObject?: UpdateManagedCredentialDefaultApplicationJson;
}
